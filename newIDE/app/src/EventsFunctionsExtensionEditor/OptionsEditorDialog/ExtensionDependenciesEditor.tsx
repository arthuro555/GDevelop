import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Table,
  TableRow,
  TableBody,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
// @ts-expect-error - TS6142 - Module '../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../../UI/Table';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';

import { mapVector } from '../../Utils/MapFor';
import newNameGenerator from '../../Utils/NewNameGenerator';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
import { showWarningBox } from '../../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';

const styles = {
  paper: { minWidth: '100%' },
} as const;

const checkNameExists = (name: string, deps: gdVectorDependencyMetadata): boolean => {
  for (let i = 0; i < deps.size(); i++)
    if (deps.at(i).getName() === name) return true;
  return false;
};

type Props = {
  eventsFunctionsExtension: gdEventsFunctionsExtension
};

export const ExtensionDependenciesEditor = ({
  eventsFunctionsExtension,
}: Props) => {
  const deps = eventsFunctionsExtension.getAllDependencies();
  const forceUpdate = useForceUpdate();

  const addDependency = () => {
    eventsFunctionsExtension
      .addDependency()
      .setName(
        newNameGenerator('New Dependency', newName =>
          checkNameExists(newName, deps)
        )
      )
      .setExportName('my-dependency')
      .setVersion('1.0.0')
      .setDependencyType('cordova');
    forceUpdate();
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableContainer
          component={({ children }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Paper style={styles.paper} background="medium">
              {children}
            </Paper>
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Name</Trans>
                </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Export name</Trans>
                </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Version</Trans>
                </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Dependency type</Trans>
                </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Action</Trans>
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableBody>
              {mapVector<gdDependencyMetadata, TableRow>(eventsFunctionsExtension.getAllDependencies(), (dependency, index) => (
                // $FlowFixMe - unsure why Flow complains about TableRow.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TableRow key={dependency.getName()}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      value={dependency.getName()}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
                      onChange={newName => {
                        if (newName === dependency.getName()) return;

                        if (checkNameExists(newName, deps)) {
                          showWarningBox(
                            `This name is already in use! Please use a unique name.`,
                            { delayToNextTick: true }
                          );
                        } else {
                          dependency.setName(newName);
                          forceUpdate();
                        }
                      }}
                      margin="none"
                    />
                  </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      value={dependency.getExportName()}
// @ts-expect-error - TS7006 - Parameter 'newExportName' implicitly has an 'any' type.
                      onChange={newExportName => {
                        if (newExportName === dependency.getExportName())
                          return;

                        dependency.setExportName(newExportName);
                        forceUpdate();
                      }}
                      margin="none"
                    />
                  </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      value={dependency.getVersion()}
// @ts-expect-error - TS7006 - Parameter 'newVersion' implicitly has an 'any' type.
                      onChange={newVersion => {
                        if (newVersion === dependency.getVersion()) return;

                        dependency.setVersion(newVersion);
                        forceUpdate();
                      }}
                      margin="none"
                    />
                  </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectField
                      value={dependency.getDependencyType()}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter '__' implicitly has an 'any' type. | TS7006 - Parameter 'newType' implicitly has an 'any' type.
                      onChange={(_, __, newType) => {
                        if (newType === dependency.getDependencyType())
                          return;

                        dependency.setDependencyType(newType);
                        forceUpdate();
                      }}
                      margin="none"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectOption value="npm" label={t`NPM`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectOption value="cordova" label={t`Cordova`} />
                    </SelectField>
                  </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <IconButton
                      tooltip={t`Delete`}
                      onClick={() => {
                        eventsFunctionsExtension.removeDependencyAt(index);
                        forceUpdate();
                      }}
                      size="small"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trash />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Add</Trans>}
                onClick={addDependency}
              />
            </Line>
          </Column>
        </TableContainer>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Dependencies allow to add additional libraries in the exported
            games. NPM dependencies will be included for Electron builds
            (Windows, macOS, Linux) and Cordova dependencies will be included
            for Cordova builds (Android, iOS). Note that this is intended for
            usage in JavaScript events only. If you are only using standard
            events, you should not worry about this.
          </Trans>
        </BackgroundText>
      </Line>
    </Column>
  );
};
