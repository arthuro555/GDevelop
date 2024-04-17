import * as React from 'react';
import intersection from 'lodash/intersection';

import GenericExpressionField from './GenericExpressionField';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { ExpressionAutocompletion } from '../../ExpressionAutocompletion';
import getObjectByName from '../../Utils/GetObjectByName';
import { getLastObjectParameterValue } from './ParameterMetadataTools';
import { getAllPointNames } from '../../ObjectEditor/Editors/SpriteEditor/Utils/SpriteObjectHelper';
import getObjectGroupByName from '../../Utils/GetObjectGroupByName';
import { mapVector } from '../../Utils/MapFor';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ObjectPointNameField(props: ParameterFieldProps, ref) {
    const field = React.useRef<GenericExpressionField>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const getPointNames = (): Array<ExpressionAutocompletion> => {
      const {
        project,
        scope,
        instructionMetadata,
        instruction,
        expressionMetadata,
        expression,
        parameterIndex,
      } = props;

      const objectOrGroupName = getLastObjectParameterValue({
        instructionMetadata,
        instruction,
        expressionMetadata,
        expression,
        parameterIndex,
      });
      if (!objectOrGroupName || !project) {
        return [];
      }

      const object = getObjectByName(project, scope.layout, objectOrGroupName);
      if (object && object.getType() === 'Sprite') {
        const spriteConfiguration = gd.asSpriteConfiguration(
          object.getConfiguration()
        );
        const animations = spriteConfiguration.getAnimations();

        return getAllPointNames(animations)
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
          .map((pointName) => (pointName.length > 0 ? pointName : null))
          .filter(Boolean)
          .sort()
          .map((pointName) => ({
            kind: 'Text',
            completion: `"${pointName}"`,
          }));
      }

      const group = getObjectGroupByName(
        project,
        scope.layout,
        objectOrGroupName
      );
      if (group) {
        // If the instruction targets a group, we check that every object of the
        // group is a sprite and get the points that they all have in common.
        const pointsNamesByObject = mapVector(
          group.getAllObjectsNames(),

          (objectName) => {
            const object = getObjectByName(project, scope.layout, objectName);
            if (!object || object.getType() !== 'Sprite') {
              return null;
            }
            const spriteConfiguration = gd.asSpriteConfiguration(
              object.getConfiguration()
            );
            const animations = spriteConfiguration.getAnimations();

            return getAllPointNames(animations)
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
              .map((pointName) => (pointName.length > 0 ? pointName : null))
              .filter(Boolean);
          }
        );

        if (pointsNamesByObject.some((pointsNames) => !pointsNames)) return [];

        // Flow fears that pointsNamesByObject contains null values but this
        // possibility should be handled above.
        return intersection<string>(...pointsNamesByObject)
          .sort()
          .map((pointName) => ({
            kind: 'Text',
            completion: `"${pointName}"`,
          }));
      }

      return [];
    };

    return (
      <GenericExpressionField
        expressionType="string"
        onGetAdditionalAutocompletions={(expression) =>
          getPointNames().filter(
            ({ completion }) => completion.indexOf(expression) === 0
          )
        }
        ref={field}
        {...props}
      />
    );
  }
);
