import * as React from 'react';
import ResourcesLoader from '../ResourcesLoader';

import ResourceSelector from './ResourceSelector';
import { ResourceManagementProps, ResourceKind } from './ResourceSource';
import ResourceThumbnail, {
  resourcesKindsWithThumbnail,
} from './ResourceThumbnail';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

import { LineStackLayout } from '../UI/Layout';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';

import { Line } from '../UI/Grid';

type Props = {
  project: gd.Project;
  resourceManagementProps: ResourceManagementProps;
  resourceKind: ResourceKind;
  resourceName: string;
  defaultNewResourceName?: string;
  onChange: (arg1: string) => void;
  floatingLabelText?: React.ReactNode;
  hintText?: MessageDescriptor;
  helperMarkdownText?: string | null | undefined;
  fallbackResourceKind?: ResourceKind;
  id?: string;
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
// @ts-expect-error - TS2345 - Argument of type 'ResourceKind' is not assignable to parameter of type '"image"'.
  const displayThumbnail = resourcesKindsWithThumbnail.includes(resourceKind);

  const resourcesSelector = (
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
      <LineStackLayout noMargin expand alignItems={itemsAlignment}>
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
    <Line noMargin expand>
      {resourcesSelector}
    </Line>
  );
};

export default ResourceSelectorWithThumbnail;
