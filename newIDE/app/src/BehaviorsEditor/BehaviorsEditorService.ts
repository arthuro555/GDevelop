// @ts-expect-error - TS6142 - Module './Editors/BehaviorPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/Editors/BehaviorPropertiesEditor.tsx', but '--jsx' is not set.
import BehaviorPropertiesEditor from './Editors/BehaviorPropertiesEditor';
// @ts-expect-error - TS6142 - Module './Editors/Physics2Editor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/Editors/Physics2Editor/index.tsx', but '--jsx' is not set.
import Physics2Editor from './Editors/Physics2Editor';

/**
 * A service returning editor components for each behavior type.
 */
const BehaviorsEditorService = {
  getEditor(behaviorType: string) {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly 'Physics2::Physics2Behavior': { readonly component: any; }; }'.
    if (!this.components[behaviorType]) {
      return BehaviorPropertiesEditor; // Default properties editor
    }
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly 'Physics2::Physics2Behavior': { readonly component: any; }; }'.
    return this.components[behaviorType].component; // Custom  behavior editor
  },
  components: {
    'Physics2::Physics2Behavior': {
      component: Physics2Editor,
    },
  },
} as const;

export default BehaviorsEditorService;
