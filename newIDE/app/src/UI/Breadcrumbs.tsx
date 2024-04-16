import * as React from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from './Link';

type BreadcrumbStep = {
  label: React.ReactNode
} | {
  label: React.ReactNode,
  onClick: () => void,
  href: string
};

type Props = {
  steps: Array<BreadcrumbStep>
};

const Breadcrumbs = ({
  steps,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MuiBreadcrumbs separator=">" aria-label="breadcrumb">
      {steps.map((step, index) =>
// @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'BreadcrumbStep'.
        step.onClick ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key={`breadcrumb${index}`} noMargin>
            {step.label}
          </Text>
        )
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
