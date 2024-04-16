// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';
import ImagePreview, {
  isProjectImageResourceSmooth,
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourcePreview/ImagePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/ImagePreview.tsx', but '--jsx' is not set.
} from '../../../ResourcesList/ResourcePreview/ImagePreview';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
import ResourceSelector from '../../../ResourcesList/ResourceSelector';
import ResourcesLoader from '../../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import { getMeasurementUnitShortLabel } from '../../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../../PropertiesEditor/MeasurementUnitDocumentation' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/MeasurementUnitDocumentation.tsx', but '--jsx' is not set.
import MeasurementUnitDocumentation from '../../../PropertiesEditor/MeasurementUnitDocumentation';
// @ts-expect-error - TS6142 - Module './ShapePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/Editors/Physics2Editor/ShapePreview.tsx', but '--jsx' is not set.
import ShapePreview from './ShapePreview';
// @ts-expect-error - TS6142 - Module './PolygonEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/Editors/Physics2Editor/PolygonEditor.tsx', but '--jsx' is not set.
import PolygonEditor from './PolygonEditor';
import { BehaviorEditorProps } from '../BehaviorEditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../../../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../../UI/EmptyMessage';
import useForceUpdate from '../../../Utils/UseForceUpdate';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';

type Props = BehaviorEditorProps;

const NumericProperty = (props: {
  id?: string,
  properties: gdMapStringPropertyDescriptor,
  propertyName: string,
  step: number,
  onUpdate: (newValue: string) => void
}) => {
  const { properties, propertyName, step, onUpdate, id } = props;
  const property = properties.get(propertyName);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledTextField
      id={id}
      fullWidth
      value={property.getValue()}
      key={propertyName}
      floatingLabelText={property.getLabel()}
      step={step}
      onChange={onUpdate}
      type="number"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      endAdornment={<UnitAdornment property={property} />}
    />
  );
};

const UnitAdornment = (props: {
  property: gdPropertyDescriptor
}) => {
  const { property } = props;
  const measurementUnit = property.getMeasurementUnit();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Tooltip
      title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MeasurementUnitDocumentation
          label={measurementUnit.getLabel()}
          description={measurementUnit.getDescription()}
          elementsWithWords={measurementUnit.getElementsWithWords()}
        />
      }
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <InputAdornment position="end">
        {getMeasurementUnitShortLabel(measurementUnit)}
      </InputAdornment>
    </Tooltip>
  );
};

const BitGroupEditor = (props: {
  bits: Array<boolean>,
  onChange: (index: number, value: boolean) => void
}) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={{ overflowX: 'auto', flex: 1 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ButtonGroup disableElevation fullWidth>
        {props.bits.map((bit, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Button
            key={index}
            variant={bit ? 'contained' : 'outlined'}
            color={bit ? 'primary' : 'default'}
            onClick={() => props.onChange(index, !bit)}
          >
            {index + 1}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

const isBitEnabled = (bitsValue: number, pos: number) => {
  return !!(bitsValue & (1 << pos));
};

const enableBit = (bitsValue: number, pos: number, enable: boolean) => {
  if (enable) bitsValue |= 1 << pos;
  else bitsValue &= ~(1 << pos);
  return bitsValue;
};

const Physics2Editor = (props: Props) => {
  const { current: resourcesLoader } = React.useRef(ResourcesLoader);
  const [image, setImage] = React.useState('');
  const { behavior, onBehaviorUpdated } = props;
  const forceUpdate = useForceUpdate();

  const updateBehaviorProperty = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'property' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
    (property, value) => {
      behavior.updateProperty(property, value);
      forceUpdate();
      onBehaviorUpdated();
    },
    [behavior, forceUpdate, onBehaviorUpdated]
  );

  const properties = behavior.getProperties();
  const bits = Array(16).fill(null);
  const shape = properties.get('shape').getValue();
  const layersValues = parseInt(properties.get('layers').getValue(), 10);
  const masksValues = parseInt(properties.get('masks').getValue(), 10);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column
      expand
      // Avoid overflow on small screens
      noOverflowParent
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          id="physics2-parameter-body-type"
          key={'bodyType'}
          fullWidth
          floatingLabelText={properties.get('bodyType').getLabel()}
          value={properties.get('bodyType').getValue()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, newValue: string) =>
            updateBehaviorProperty('bodyType', newValue)
          }
        >
          {[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              key={'dynamic'}
              value={'Dynamic'}
              label={t`Dynamic`}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption key={'static'} value={'Static'} label={t`Static`} />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              key={'kinematic'}
              value={'Kinematic'}
              label={t`Kinematic`}
            />,
          ]}
        </SelectField>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          label={properties.get('bullet').getLabel()}
          checked={properties.get('bullet').getValue() === 'true'}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) =>
            updateBehaviorProperty('bullet', checked ? '1' : '0')
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          label={properties.get('fixedRotation').getLabel()}
          checked={properties.get('fixedRotation').getValue() === 'true'}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) =>
            updateBehaviorProperty('fixedRotation', checked ? '1' : '0')
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          label={properties.get('canSleep').getLabel()}
          checked={properties.get('canSleep').getValue() === 'true'}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) =>
            updateBehaviorProperty('canSleep', checked ? '1' : '0')
          }
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <DismissableAlertMessage
          identifier="physics2-shape-collisions"
          kind="info"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            The shape used in the Physics behavior is independent from the
            collision mask of the object. Be sure to use the "Collision"
            condition provided by the Physics behavior in the events. The usual
            "Collision" condition won't take into account the shape that you've
            set up here.
          </Trans>
        </DismissableAlertMessage>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          id="physics2-parameter-shape"
          fullWidth
          floatingLabelText={properties.get('shape').getLabel()}
          value={properties.get('shape').getValue()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, newValue: string) =>
            updateBehaviorProperty('shape', newValue)
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption key={'box'} value={'Box'} label={t`Box`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption key={'circle'} value={'Circle'} label={t`Circle`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption key={'edge'} value={'Edge'} label={t`Edge`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption key={'polygon'} value={'Polygon'} label={t`Polygon`} />
        </SelectField>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout>
        {shape !== 'Polygon' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledTextField
            fullWidth
            value={properties.get('shapeDimensionA').getValue()}
            key={'shapeDimensionA'}
            floatingLabelText={
              shape === 'Circle'
                ? 'Radius'
                : shape === 'Edge'
                ? 'Length'
                : 'Width'
            }
            min={0}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
            onChange={newValue =>
              updateBehaviorProperty('shapeDimensionA', newValue)
            }
            type="number"
            endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <UnitAdornment property={properties.get('shapeDimensionA')} />
            }
          />
        )}
        {shape !== 'Polygon' && shape !== 'Circle' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledTextField
            fullWidth
            value={properties.get('shapeDimensionB').getValue()}
            key={'shapeDimensionB'}
            floatingLabelText={shape === 'Edge' ? 'Angle' : 'Height'}
            min={shape === 'Edge' ? undefined : 0}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
            onChange={newValue =>
              updateBehaviorProperty('shapeDimensionB', newValue)
            }
            type="number"
            endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <UnitAdornment property={properties.get('shapeDimensionB')} />
            }
          />
        )}
        {shape === 'Polygon' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            fullWidth
            floatingLabelText={properties.get('polygonOrigin').getLabel()}
            value={properties.get('polygonOrigin').getValue()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, newValue: string) =>
              updateBehaviorProperty('polygonOrigin', newValue)
            }
          >
            {[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={'center'}
                value={'Center'}
                label={t`Center`}
              />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={'origin'}
                value={'Origin'}
                label={t`Origin`}
              />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                key={'topLeft'}
                value={'TopLeft'}
                label={t`Top-Left`}
              />,
            ]}
          </SelectField>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'shapeOffsetX'}
          step={1}
          onUpdate={newValue =>
            updateBehaviorProperty('shapeOffsetX', newValue)
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'shapeOffsetY'}
          step={1}
          onUpdate={newValue =>
            updateBehaviorProperty('shapeOffsetY', newValue)
          }
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResourceSelector
          floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              A temporary image to help you visualize the shape/polygon
            </Trans>
          }
          project={props.project}
          resourceManagementProps={props.resourceManagementProps}
          resourcesLoader={resourcesLoader}
          resourceKind={'image'}
          initialResourceName={''}
          fullWidth
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
          onChange={resourceName => {
            setImage(resourceName);
            onBehaviorUpdated();
            forceUpdate();
          }}
        />
      </Line>
      {!image && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              To preview the shape that the Physics engine will use for this
              object, choose first a temporary image to use for the preview.
            </Trans>
          </EmptyMessage>
        </Line>
      )}
      {image && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
            style={{
              width:
                '100%' /* This div prevents ImagePreview to overflow outside the parent */,
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ImagePreview
              resourceName={image}
              imageResourceSource={resourcesLoader.getResourceFullUrl(
                props.project,
                image,
                {}
              )}
              isImageResourceSmooth={isProjectImageResourceSmooth(
                props.project,
                image
              )}
              fixedHeight={200}
// @ts-expect-error - TS7006 - Parameter 'overlayProps' implicitly has an 'any' type.
              renderOverlay={overlayProps => {
                // The result from `getProperties` is temporary, and because this renderOverlay
                // function can be called outside of the render, we must get the properties again.
                const properties = behavior.getProperties();

                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ShapePreview
                    {...overlayProps}
                    shape={properties.get('shape').getValue()}
                    dimensionA={parseFloat(
                      properties.get('shapeDimensionA').getValue()
                    )}
                    dimensionB={parseFloat(
                      properties.get('shapeDimensionB').getValue()
                    )}
                    offsetX={parseFloat(
                      properties.get('shapeOffsetX').getValue()
                    )}
                    offsetY={parseFloat(
                      properties.get('shapeOffsetY').getValue()
                    )}
                    polygonOrigin={properties.get('polygonOrigin').getValue()}
                    vertices={JSON.parse(properties.get('vertices').getValue())}
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type. | TS7006 - Parameter 'newX' implicitly has an 'any' type. | TS7006 - Parameter 'newY' implicitly has an 'any' type.
                    onMoveVertex={(index, newX, newY) => {
                      let vertices = JSON.parse(
                        properties.get('vertices').getValue()
                      );
                      vertices[index].x = newX;
                      vertices[index].y = newY;
                      behavior.updateProperty(
                        'vertices',
                        JSON.stringify(vertices)
                      );
                      forceUpdate();
                      onBehaviorUpdated();
                    }}
                  />
                );
              }}
            />
          </div>
        </Line>
      )}
      {shape === 'Polygon' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PolygonEditor
            vertices={JSON.parse(properties.get('vertices').getValue())}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
            onChangeVertexX={(newValue, index) => {
              let vertices = JSON.parse(properties.get('vertices').getValue());
              vertices[index].x = newValue;
              updateBehaviorProperty('vertices', JSON.stringify(vertices));
            }}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
            onChangeVertexY={(newValue, index) => {
              let vertices = JSON.parse(properties.get('vertices').getValue());
              vertices[index].y = newValue;
              updateBehaviorProperty('vertices', JSON.stringify(vertices));
            }}
            onAdd={() => {
              let vertices = JSON.parse(properties.get('vertices').getValue());
              if (vertices.length >= 8) return;
              vertices.push({ x: 0, y: 0 });
              updateBehaviorProperty('vertices', JSON.stringify(vertices));
            }}
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
            onRemove={index => {
              let vertices = JSON.parse(properties.get('vertices').getValue());
              vertices.splice(index, 1);
              updateBehaviorProperty('vertices', JSON.stringify(vertices));
            }}
          />
        </Line>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          id="physics2-parameter-density"
          properties={properties}
          propertyName={'density'}
          step={0.1}
          onUpdate={newValue =>
            updateBehaviorProperty(
              'density',
              parseFloat(newValue) > 0 ? newValue : '0'
            )
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'gravityScale'}
          step={0.1}
          onUpdate={newValue =>
            updateBehaviorProperty('gravityScale', newValue)
          }
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'friction'}
          step={0.1}
          onUpdate={newValue =>
            updateBehaviorProperty(
              'friction',
              parseFloat(newValue) > 0 ? newValue : '0'
            )
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'restitution'}
          step={0.1}
          onUpdate={newValue =>
            updateBehaviorProperty(
              'restitution',
              parseFloat(newValue) > 0 ? newValue : '0'
            )
          }
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          properties={properties}
          propertyName={'linearDamping'}
          step={0.05}
          onUpdate={newValue =>
            updateBehaviorProperty('linearDamping', newValue)
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <NumericProperty
          id="physics2-parameter-angular-damping"
          properties={properties}
          propertyName={'angularDamping'}
          step={0.05}
          onUpdate={newValue =>
            updateBehaviorProperty('angularDamping', newValue)
          }
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text style={{ marginRight: 10 }}>
          {properties.get('layers').getLabel()}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BitGroupEditor
          bits={bits.map((_, idx) => isBitEnabled(layersValues, idx))}
          onChange={(index, value) => {
            const newValue = enableBit(layersValues, index, value);
            updateBehaviorProperty('layers', newValue.toString(10));
          }}
        />
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text style={{ marginRight: 10 }}>
          {properties.get('masks').getLabel()}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BitGroupEditor
          bits={bits.map((_, idx) => isBitEnabled(masksValues, idx))}
          onChange={(index, value) => {
            const newValue = enableBit(masksValues, index, value);
            updateBehaviorProperty('masks', newValue.toString(10));
          }}
        />
      </Line>
    </Column>
  );
};

export default Physics2Editor;
