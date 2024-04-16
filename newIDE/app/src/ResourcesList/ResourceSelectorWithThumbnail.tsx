import * as React from 'react';
import ResourcesLoader from '../ResourcesLoader';
// @ts-expect-error - TS6142 - Module './ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
import ResourceSelector from './ResourceSelector';
import {
  ResourceManagementProps,
  ResourceKind,
} from './ResourceSource';
import ResourceThumbnail, {
  resourcesKindsWithThumbnail,
// @ts-expect-error - TS6142 - Module './ResourceThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceThumbnail/index.tsx', but '--jsx' is not set.
} from './ResourceThumbnail';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';

type Props = {
  project: gdProject,
  resourceManagementProps: ResourceManagementProps,
  resourceKind: ResourceKind,
  resourceName: string,
  defaultNewResourceName?: string,
  onChange: (arg1: string) => void,
  floatingLabelText?: React.ReactNode,
  hintText?: MessageDescriptor,
  helperMarkdownText?: string | null | undefined,
  fallbackResourceKind?: ResourceKind,
  id?: string
};

const ResourceSelectorWithThumbnail = ({
  project,
  resourceManagementProps,
  resourceKind,
  resourceName,
  defaultNewResourceName,
  onChange,
  floatingLabelText,
  hintText,
  helperMarkdownText,
  fallbackResourceKind,
  id,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const itemsAlignment = isMobile ? 'center' : 'flex-end';
  const displayThumbnail = resourcesKindsWithThumbnail.includes(resourceKind);

  const resourcesSelector = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceSelector
      project={project}
      resourceManagementProps={resourceManagementProps}
      resourcesLoader={ResourcesLoader}
      resourceKind={resourceKind}
      fullWidth
      initialResourceName={resourceName}
      defaultNewResourceName={defaultNewResourceName}
      onChange={onChange}
      floatingLabelText={floatingLabelText}
      hintText={hintText}
      helperMarkdownText={helperMarkdownText}
      fallbackResourceKind={fallbackResourceKind}
      id={id}
    />
  );
  if (displayThumbnail) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <LineStackLayout noMargin expand alignItems={itemsAlignment}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResourceThumbnail
          resourceName={resourceName}
          resourcesLoader={ResourcesLoader}
          project={project}
          resourceKind={resourceKind}
        />
        {resourcesSelector}
      </LineStackLayout>
    );
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin expand>
      {resourcesSelector}
    </Line>
  );
};

export default ResourceSelectorWithThumbnail;
