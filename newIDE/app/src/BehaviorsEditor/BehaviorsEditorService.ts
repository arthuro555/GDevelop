import BehaviorPropertiesEditor from './Editors/BehaviorPropertiesEditor';

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
