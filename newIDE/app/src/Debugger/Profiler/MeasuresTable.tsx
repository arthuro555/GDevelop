// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer, Table, Column } from 'react-virtualized';
import flatMap from 'lodash/flatMap';
// @ts-expect-error - TS6142 - Module '..' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/index.tsx', but '--jsx' is not set.
import { ProfilerMeasuresSection } from '..';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from '../../UI/CustomSvgIcons/ChevronArrowBottom';

const styles = {
  indent: {
    display: 'flex',
    alignItems: 'center',
  },
} as const;

type Props = {
  profilerMeasures: ProfilerMeasuresSection | null | undefined
};

type ProfilerRowData = {
  name: string,
  time: string,
  parentPercent: string,
  totalPercent: string,
  depth: number,
  hasSubsections: boolean,
  path: string,
  isCollapsed: boolean
};

const MeasuresTable = (props: Props) => {
  const [collapsedPaths, setCollapsedPaths] = React.useState({});

  const convertToDataRows = (
    name: string,
    parentSection: ProfilerMeasuresSection | null | undefined,
    section: ProfilerMeasuresSection,
    depth: number = 0,
    path: string = '',
  ): Array<ProfilerRowData> => {
    const { profilerMeasures } = props;

    const parentPercent =
      parentSection && section.time && parentSection.time !== 0
        ? (section.time / parentSection.time) * 100
        : 100;
    const totalPercent =
      profilerMeasures && section.time && profilerMeasures.time !== 0
        ? (section.time / profilerMeasures.time) * 100
        : 100;
    const isCollapsed = isSectionCollapsed(path);

    return [
      {
        name,
        time: section.time ? `${section.time.toFixed(2)}ms` : '?',
        parentPercent: `${parentPercent.toFixed(2)}%`,
        totalPercent: `${totalPercent.toFixed(2)}%`,
        depth,
        hasSubsections: !!Object.keys(section.subsections).length,
        path,
        isCollapsed,
      },
      ...(isCollapsed
        ? []
        : flatMap(section.subsections, (subsection, subsectionName) =>
            convertToDataRows(
              subsectionName,
              section,
              subsection,
              depth + 1,
              `${path}>${depth}.${subsectionName}`
            )
          )),
    ];
  };

  const isSectionCollapsed = (path: string) => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    return collapsedPaths[path];
  };

  const toggleSection = (path: string) => {
    setCollapsedPaths({
      ...collapsedPaths,
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
      [path]: !collapsedPaths[path],
    });
  };

  const rowClassName = ({
    index,
  }: {
    index: number
  }) => {
    if (index < 0) {
      return 'tableHeaderRow';
    } else {
      return index % 2 === 0 ? 'tableEvenRow' : 'tableOddRow';
    }
  };

  const renderSectionNameCell = ({
    rowData,
  }: {
    rowData: ProfilerRowData
  }) => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.indent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={{ width: rowData.depth * 8 }} />
        {rowData.hasSubsections ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton onClick={() => toggleSection(rowData.path)}>
            {rowData.isCollapsed ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ChevronArrowRight />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ChevronArrowBottom />
            )}
          </IconButton>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div style={{ width: 24 }} />
        )}
        {/*
          The name is wrapped in a span to prevent crashes when Google Translate
          translates the website. See https://github.com/4ian/GDevelop/issues/3453.
        */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span>{rowData.name}</span>
      </div>
    );
  };

  const { profilerMeasures } = props;
  if (!profilerMeasures) return null;

  const dataRows = convertToDataRows('All', null, profilerMeasures);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. | TS7031 - Binding element 'width' implicitly has an 'any' type. */}
      {({ height, width }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Table
          headerHeight={30}
          height={height}
          className={`gd-table`}
          headerClassName={'tableHeaderColumn'}
          rowCount={dataRows.length}
// @ts-expect-error - TS7031 - Binding element 'index' implicitly has an 'any' type.
          rowGetter={({ index }) => dataRows[index]}
          rowHeight={35}
          onRowClick={() => {}}
          rowClassName={rowClassName}
          width={width}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Section name</Trans>}
            dataKey="name"
            width={width * 0.4}
            className={'tableColumn'}
            cellRenderer={renderSectionNameCell}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Time (ms)</Trans>}
            dataKey="time"
            width={width * 0.2}
            className={'tableColumn'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>% of parent</Trans>}
            dataKey="parentPercent"
            width={width * 0.2}
            className={'tableColumn'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>% of total</Trans>}
            dataKey="totalPercent"
            width={width * 0.2}
            className={'tableColumn'}
          />
        </Table>
      )}
    </AutoSizer>
  );
};

export default MeasuresTable;
