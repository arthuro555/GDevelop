import React from 'react';
import InstructionsEditor from '../EventsSheet';
import IconButton from '../UI/IconButton';
import Check from '@material-ui/icons/Check';

const gd: libGDevelop = global.gd;
const staticEmptySet = new gd.SetString();

export const CodeInjector = ({ project, gameData, onInjectCode }) => {
  const [eventFunction] = React.useState(new gd.EventsFunction());
  React.useEffect(() => () => eventFunction.delete(), []);

  if (!gameData) return <>Please refresh the game data</>;

  const currentScene = project.getLayout(gameData._sceneStack._stack[0]._name);

  const runInPreview = () => {
    const codeGen = new gd.EventsFunctionsExtensionCodeGenerator(project);
    const code = `(function() {
      ${codeGen.generateFreeEventsFunctionCompleteCode(
        eventFunction,
        'tempCode',
        staticEmptySet,
        true
      )}
      return tempCode.func;
    })()`;
    codeGen.delete();

    onInjectCode(code);
  };

  return (
    <>
      <InstructionsEditor
        project={project}
        scope={{
          layout: currentScene,
          eventsFunctionsExtension: null,
          eventsBasedBehavior: null,
          eventsFunction: eventFunction,
        }}
        globalObjectsContainer={project}
        objectsContainer={currentScene}
        events={eventFunction.getEvents()}
        onOpenExternalEvents={() => {}}
        onOpenLayout={() => {}}
        resourceSources={() => {}}
        onChooseResource={() => {}}
        resourceExternalEditors={() => {}}
        openInstructionOrExpression={() => {}}
        setToolbar={() => {}}
        onCreateEventsFunction={() => {}}
        onOpenSettings={() => {}}
      />
      <IconButton tooltip="e" onClick={runInPreview}>
        <Check />
      </IconButton>
    </>
  );
};
