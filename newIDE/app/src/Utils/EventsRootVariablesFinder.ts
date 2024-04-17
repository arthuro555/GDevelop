
/** Naive way to check if a variable expression is not using a structure/array. */
const isRootVariableName = fullName: string =>
  !fullName.includes('.') && !fullName.includes('[') && fullName.length > 0;

/**
 * Find variables used in a project - useful to let the user know about variables
 * that are not declared in a list of variables (providing autocompletion for it,
 * or at least a hint that a variable was not declared - on purpose or by mistake).
 *
 * Note that this **works only for non structure/array variables**.
 *
 * TODO: Improve this to support all kind of variables, probably by returning the
 * "shape"/"types" of identified variables (especially for structures/arrays).
 */
export default class EventsRootVariablesFinder {
  static findAllGlobalVariables(platform: gd.Platform, project: gd.Project): string[] {
    return (
      gd.EventsVariablesFinder.findAllGlobalVariables(platform, project)
        .toNewVectorString()
        .toJSArray()
        // Remove child references
        .filter(isRootVariableName)
    );
  }

  static findAllLayoutVariables(platform: gd.Platform, project: gd.Project, layout: gd.Layout): string[] {
    return gd.EventsVariablesFinder.findAllLayoutVariables(
      project.getCurrentPlatform(),
      project,
      layout
    )
      .toNewVectorString()
      .toJSArray()
      .filter(isRootVariableName);
  }

  static findAllObjectVariables(
    platform: gd.Platform,
    project: gd.Project,
    layout: gd.Layout,
    object: gd.Object,
  ): string[] {
    return gd.EventsVariablesFinder.findAllObjectVariables(
      project.getCurrentPlatform(),
      project,
      layout,
      object
    )
      .toNewVectorString()
      .toJSArray()
      .filter(isRootVariableName);
  }
}
