// @flow
import { t } from '@lingui/macro';
import { Trans } from '@lingui/macro';
import { type I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import { TreeTableRow, TreeTableCell } from '../UI/TreeTable';
import DragHandle from '../UI/DragHandle';
import SemiControlledTextField from '../UI/SemiControlledTextField';
import SemiControlledAutoComplete from '../UI/SemiControlledAutoComplete';
import Checkbox from '../UI/Checkbox';
import AddCircle from '@material-ui/icons/AddCircle';
import BuildIcon from '@material-ui/icons/Build';
import SubdirectoryArrowRight from '@material-ui/icons/SubdirectoryArrowRight';
import IconButton from '../UI/IconButton';
import Replay from '@material-ui/icons/Replay';
import styles from './styles';
import BooleanField from '../UI/BooleanField';
import { type VariableOrigin } from './VariablesList.flow';
import Text from '../UI/Text';
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
import BackgroundText from '../UI/BackgroundText';
import useForceUpdate from '../Utils/UseForceUpdate';
import newNameGenerator from '../Utils/NewNameGenerator';
const gd: libGDevelop = global.gd;

type Props = {|
  name: string,
  variable: gdVariable,
  parent: gdVariable | gdVariablesContainer,
  errorText?: ?string,
  commitVariableValueOnBlur: boolean,
  onChangeParentVariable: (variable: gdVariable, name: string) => gdVariable,
  onResetToDefaultValue: () => void,
  isSelected: boolean,
  onSelect: boolean => void,
  origin: VariableOrigin,
  arrayElement: boolean,
  undefinedVariableNames: Array<string>,
|};

const VariableRow = ({
  name,
  variable,
  parent,
  path,
  errorText,
  commitVariableValueOnBlur,
  onResetToDefaultValue,
  origin,
  inheritedVariablesContainer,
  variablesContainer,
  rootContainer,
  undefinedVariableNames,
}: Props) => {
  const type = variable.getType();
  const isCollection = !gd.Variable.isPrimitive(type);
  // The parent could also be a gd.VariablesContainer
  const parentIsVariable = parent instanceof gd.Variable;
  // Can't edit the name if the parent is an array, since arrays don't name their children.
  const canEditName = !(
    parentIsVariable && parent.getType() === gd.Variable.Array
  );
  const forceUpdate = useForceUpdate();

  const key = variable.ptr;
  const limitEditing = origin === 'parent' || origin === 'inherited';

  const onRename = (newName: string) => {
    parentIsVariable
      ? parent.renameChild(name, newName)
      : parent.rename(name, newName);
    forceUpdate();
  };

  const onChangeType = (newType: string) => {
    variable.castTo(newType);
    forceUpdate();
  };

  const onChangeParentVariable = () => {
    if (rootContainer === inheritedVariablesContainer) {
      console.log(path);
    }
    return variable;
  };

  const columns = [
    <TreeTableCell key="name" expand>
      {canEditName ? (
        <Text noMargin>{name}</Text>
      ) : (
        <SemiControlledAutoComplete
          margin="none"
          style={{
            fontStyle: origin === 'inherited' ? 'italic' : 'normal',
          }}
          fullWidth
          errorText={errorText}
          disabled={origin === 'parent'}
          value={name}
          onChange={onRename}
          dataSource={
            undefinedVariableNames
              ? undefinedVariableNames.map(name => ({
                  text: name,
                  value: name,
                }))
              : []
          }
          openOnFocus={true}
        />
      )}
    </TreeTableCell>,
  ];

  if (isCollection) {
    // Variable is Array or Structure
    columns.push(
      <TreeTableCell
        expand
        key="value"
        style={limitEditing ? styles.fadedButton : undefined}
      >
        <BackgroundText>
          {type === gd.Variable.Structure ? (
            <Trans>Structure</Trans>
          ) : (
            <Trans>Array</Trans>
          )}
        </BackgroundText>
      </TreeTableCell>
    );
  } else if (type === gd.Variable.Boolean) {
    columns.push(
      <TreeTableCell key="value" expand>
        <BooleanField
          value={variable.getBool()}
          onChange={newValue => {
            if (origin === 'parent')
              variable = onChangeParentVariable(variable, name);
            variable.setBool(newValue);
            forceUpdate();
          }}
        />
      </TreeTableCell>
    );
  } else {
    // Variable is Number or String
    columns.push(
      <TreeTableCell key="value" expand>
        <SemiControlledTextField
          margin="none"
          type={type === gd.Variable.String ? 'text' : 'number'}
          commitOnBlur={commitVariableValueOnBlur}
          fullWidth
          name={key + 'value'}
          value={
            type === gd.Variable.String
              ? variable.getString()
              : '' + variable.getValue()
          }
          onChange={newValue => {
            if (type === gd.Variable.String) {
              if (variable.getString() !== newValue) {
                if (origin === 'parent')
                  variable = onChangeParentVariable(variable, name);
                variable.setString(newValue);
              }
            } else {
              if (variable.getValue() !== newValue) {
                if (origin === 'parent')
                  variable = onChangeParentVariable(variable, name);
                variable.setValue(parseFloat(newValue));
              }
            }
            forceUpdate();
          }}
          multiline={type === gd.Variable.String}
          inputStyle={
            type === gd.Variable.String
              ? styles.noPaddingMultilineTextField
              : undefined
          }
        />
      </TreeTableCell>
    );
  }

  columns.push(
    <TreeTableCell key="tools" style={styles.toolColumn}>
      {origin === 'inherited' ? (
        <IconButton
          size="small"
          onClick={onResetToDefaultValue}
          style={isCollection ? undefined : styles.fadedButton}
          tooltip={t`Reset`}
        >
          <Replay />
        </IconButton>
      ) : (
        origin !== 'parent' && (
          <>
            {isCollection ? (
              <IconButton
                size="small"
                tooltip={t`Add child variable`}
                onClick={() => {
                  if (type === gd.Variable.Structure) {
                    const name = newNameGenerator('ChildVariable', name =>
                      variable.hasChild(name)
                    );
                    variable.getChild(name).setString('');
                  } else if (type === gd.Variable.Array) variable.pushNew();
                  forceUpdate();
                }}
              >
                <AddCircle />
              </IconButton>
            ) : (
              <IconButton
                size="small"
                style={styles.fadedButton}
                tooltip={t`Convert the variable to a collection before adding children`}
              >
                <AddCircle />
              </IconButton>
            )}
            <ElementWithMenu
              element={
                <IconButton size="small" tooltip={t`Change variable type`}>
                  <BuildIcon />
                </IconButton>
              }
              buildMenuTemplate={(i18n: I18nType) => [
                {
                  label: 'Primitive types',
                  submenu: [
                    {
                      visible: type !== gd.Variable.String,
                      label: i18n._(t`Convert to string`),
                      click: () => onChangeType('string'),
                    },
                    {
                      visible: type !== gd.Variable.Number,
                      label: i18n._(t`Convert to number`),
                      click: () => onChangeType('number'),
                    },
                    {
                      visible: type !== gd.Variable.Boolean,
                      label: i18n._(t`Convert to boolean`),
                      click: () => onChangeType('boolean'),
                    },
                  ],
                },

                {
                  label: 'Collection types',
                  submenu: [
                    {
                      visible: type !== gd.Variable.Structure,
                      label: i18n._(t`Convert to structure`),
                      click: () => onChangeType('structure'),
                    },
                    {
                      visible: type !== gd.Variable.Array,
                      label: i18n._(t`Convert to array`),
                      click: () => onChangeType('array'),
                    },
                  ],
                },
              ]}
            />
          </>
        )
      )}
    </TreeTableCell>
  );

  return (
    <>
      <TreeTableRow>{columns}</TreeTableRow>
    </>
  );
};

export default VariableRow;
