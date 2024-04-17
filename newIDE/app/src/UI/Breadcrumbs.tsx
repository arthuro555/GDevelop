import * as React from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

import Text from './Text';

import Link from './Link';

type BreadcrumbStep =
  | {
      label: React.ReactNode;
    }
  | {
      label: React.ReactNode;
      onClick: () => void;
      href: string;
    };

type Props = {
  steps: Array<BreadcrumbStep>;
};

const Breadcrumbs = ({ steps }: Props) => {
  return (
    <MuiBreadcrumbs separator=">" aria-label="breadcrumb">
      {steps.map((step, index) =>
        // @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'BreadcrumbStep'.
        step.onClick ? (
          <Link
            // @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'BreadcrumbStep'.
            onClick={step.onClick}
            // @ts-expect-error - TS2339 - Property 'href' does not exist on type 'BreadcrumbStep'.
            href={step.href}
            key={`breadcrumb${index}`}
          >
            {step.label}
          </Link>
        ) : (
          <Text key={`breadcrumb${index}`} noMargin>
            {step.label}
          </Text>
        )
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
