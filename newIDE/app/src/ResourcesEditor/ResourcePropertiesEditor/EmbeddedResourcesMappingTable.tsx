import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
// @ts-expect-error - TS6142 - Module '../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../../UI/Table';
import { readEmbeddedResourcesMapping } from '../../ObjectsRendering/PixiResourcesLoader';

type Props = {
  resources: Array<gdResource>
};

const styles = {
  tableCell: {
    // Avoid long filenames breaking the design.
    wordBreak: 'break-word',
  },
} as const;

export const EmbeddedResourcesMappingTable = ({
  resources,
}: Props) => {
  if (resources.length !== 1) return null;

  const resource = resources[0];
  const embeddedResourcesMapping = readEmbeddedResourcesMapping(resource);
  if (!embeddedResourcesMapping) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Embedded file name</Trans>
          </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Associated resource name</Trans>
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableBody>
        {Object.entries(embeddedResourcesMapping).map(
          ([embeddedFilePath, associatedResourceNameRaw]: [any, any]) => {
            const associatedResourceName =
              typeof associatedResourceNameRaw === 'string'
                ? associatedResourceNameRaw
                : 'Unrecognized value.';

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TableRow key={embeddedFilePath}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableRowColumn style={styles.tableCell}>
                  {embeddedFilePath}
                </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableRowColumn style={styles.tableCell}>
                  {associatedResourceName}
                </TableRowColumn>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};
