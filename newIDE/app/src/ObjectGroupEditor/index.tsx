import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../UI/List';
// @ts-expect-error - TS6142 - Module '../ObjectsList/ObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/ObjectSelector.tsx', but '--jsx' is not set.
import ObjectSelector from '../ObjectsList/ObjectSelector';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../UI/ListIcon';
import ObjectsRenderingService from '../ObjectsRendering/ObjectsRenderingService';
import getObjectByName from '../Utils/GetObjectByName';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
const gd: libGDevelop = global.gd;

const styles = {
  objectSelector: { position: 'sticky', bottom: 0 },
} as const;

type Props = {
  project: gdProject | null | undefined,
  group: gdObjectGroup,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  onSizeUpdated?: () => void,
  onObjectGroupUpdated?: () => void
};

const ObjectGroupEditor = ({
  project,
  group,
  globalObjectsContainer,
  objectsContainer,
  onSizeUpdated,
  onObjectGroupUpdated,
}: Props) => {
  const [objectName, setObjectName] = React.useState<string>('');
  const objectsInGroup = group.getAllObjectsNames().toJSArray();

  const removeObject = (objectName: string) => {
    group.removeObject(objectName);

    if (onSizeUpdated) onSizeUpdated();
    if (onObjectGroupUpdated) onObjectGroupUpdated();
  };

  const addObject = (objectName: string) => {
    group.addObject(objectName);
    setObjectName('');
    if (onSizeUpdated) onSizeUpdated();
    if (onObjectGroupUpdated) onObjectGroupUpdated();
  };

  const renderExplanation = () => {
// @ts-expect-error - TS7034 - Variable 'type' implicitly has type 'any' in some locations where its type cannot be determined.
    let type = undefined;
    if (objectsInGroup.length === 0) {
      return null;
    }
// @ts-expect-error - TS7006 - Parameter 'objectName' implicitly has an 'any' type.
    objectsInGroup.forEach(objectName => {
      const objectType = gd.getTypeOfObject(
        globalObjectsContainer,
        objectsContainer,
        objectName,
        false
      );
// @ts-expect-error - TS7005 - Variable 'type' implicitly has an 'any' type. | TS7005 - Variable 'type' implicitly has an 'any' type.
      if (type === undefined || objectType === type) type = objectType;
      else type = '';
    });

    const message =
      type === '' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            This group contains objects of different kinds. You'll only be able
            to use actions and conditions common to all objects with this group.
          </Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Variables declared in all objects of the group will be visible in
            event expressions.
          </Trans>
        </>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            This group contains objects of the same kind ({type}). You can use
            actions and conditions related to this kind of objects in events
            with this group.
          </Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Variables declared in all objects of the group will be visible in
            event expressions.
          </Trans>
        </>
      );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <AlertMessage kind="info">{message}</AlertMessage>;
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {renderExplanation()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <List>
        {group
          .getAllObjectsNames()
          .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'objectName' implicitly has an 'any' type.
          .map(objectName => {
            let object = getObjectByName(
              globalObjectsContainer,
              objectsContainer,
              objectName
            );
            const icon =
              project && object ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ListIcon
                  iconSize={24}
                  src={ObjectsRenderingService.getThumbnail(
                    project,
                    object.getConfiguration()
                  )}
                />
              ) : null;
            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ListItem
                key={objectName}
                primaryText={objectName}
                displayRemoveButton
                onRemove={() => removeObject(objectName)}
                leftIcon={icon}
              />
            );
          })}
      </List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper style={styles.objectSelector} background="medium">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ObjectSelector
            project={project}
            globalObjectsContainer={globalObjectsContainer}
            objectsContainer={objectsContainer}
            value={objectName}
            excludedObjectOrGroupNames={objectsInGroup}
            onChange={setObjectName}
            onChoose={addObject}
            openOnFocus
            noGroups
            hintText={t`Choose an object to add to the group`}
            fullWidth
          />
        </Column>
      </Paper>
    </ColumnStackLayout>
  );
};

export default ObjectGroupEditor;
