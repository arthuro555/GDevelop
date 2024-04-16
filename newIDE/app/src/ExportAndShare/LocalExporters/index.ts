// @ts-expect-error - TS6142 - Module '../ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
import {Exporter} from '../ShareDialog';
// @ts-expect-error - TS6142 - Module './LocalCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalCordovaExport.tsx', but '--jsx' is not set.
import { localCordovaExportPipeline } from './LocalCordovaExport';
// @ts-expect-error - TS6142 - Module './LocalElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalElectronExport.tsx', but '--jsx' is not set.
import { localElectronExportPipeline } from './LocalElectronExport';
// @ts-expect-error - TS6142 - Module './LocalHTML5Export' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalHTML5Export.tsx', but '--jsx' is not set.
import { localHTML5ExportPipeline } from './LocalHTML5Export';
// @ts-expect-error - TS6142 - Module './LocalFacebookInstantGamesExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalFacebookInstantGamesExport.tsx', but '--jsx' is not set.
import { localFacebookInstantGamesExportPipeline } from './LocalFacebookInstantGamesExport';
// @ts-expect-error - TS6142 - Module './LocalOnlineCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalOnlineCordovaExport.tsx', but '--jsx' is not set.
import { localOnlineCordovaExportPipeline } from './LocalOnlineCordovaExport';
// @ts-expect-error - TS6142 - Module './LocalOnlineCordovaIosExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalOnlineCordovaIosExport.tsx', but '--jsx' is not set.
import { localOnlineCordovaIosExportPipeline } from './LocalOnlineCordovaIosExport';
// @ts-expect-error - TS6142 - Module './LocalOnlineElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalOnlineElectronExport.tsx', but '--jsx' is not set.
import { localOnlineElectronExportPipeline } from './LocalOnlineElectronExport';
// @ts-expect-error - TS6142 - Module './LocalOnlineWebExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalOnlineWebExport.tsx', but '--jsx' is not set.
import { localOnlineWebExportPipeline } from './LocalOnlineWebExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/CordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/CordovaExport.tsx', but '--jsx' is not set.
import { cordovaExporter } from '../GenericExporters/CordovaExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineWebExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/index.tsx', but '--jsx' is not set.
import { onlineWebExporter } from '../GenericExporters/OnlineWebExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/HTML5Export' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/HTML5Export.tsx', but '--jsx' is not set.
import { html5Exporter } from '../GenericExporters/HTML5Export';
// @ts-expect-error - TS6142 - Module '../GenericExporters/FacebookInstantGamesExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/FacebookInstantGamesExport.tsx', but '--jsx' is not set.
import { facebookInstantGamesExporter } from '../GenericExporters/FacebookInstantGamesExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineCordovaExport.tsx', but '--jsx' is not set.
import { onlineCordovaExporter } from '../GenericExporters/OnlineCordovaExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineCordovaIosExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineCordovaIosExport.tsx', but '--jsx' is not set.
import { onlineCordovaIosExporter } from '../GenericExporters/OnlineCordovaIosExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineElectronExport.tsx', but '--jsx' is not set.
import { onlineElectronExporter } from '../GenericExporters/OnlineElectronExport';
// @ts-expect-error - TS6142 - Module '../GenericExporters/ElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/ElectronExport.tsx', but '--jsx' is not set.
import { electronExporter } from '../GenericExporters/ElectronExport';

export const localOnlineWebExporter: Exporter = {
  ...onlineWebExporter,
  exportPipeline: localOnlineWebExportPipeline,
};

export const localAutomatedExporters: Array<Exporter> = [
  {
    ...html5Exporter,
    exportPipeline: localHTML5ExportPipeline,
  },
  {
    ...onlineCordovaExporter,
    exportPipeline: localOnlineCordovaExportPipeline,
  },
  {
    ...onlineCordovaIosExporter,
    exportPipeline: localOnlineCordovaIosExportPipeline,
  },
  {
    ...onlineElectronExporter,
    exportPipeline: localOnlineElectronExportPipeline,
  },
  {
    ...facebookInstantGamesExporter,
    exportPipeline: localFacebookInstantGamesExportPipeline,
  },
];

export const localManualExporters: Array<Exporter> = [
  {
    ...html5Exporter,
    exportPipeline: localHTML5ExportPipeline,
  },
  {
    ...cordovaExporter,
    exportPipeline: localCordovaExportPipeline,
  },
  {
    ...electronExporter,
    exportPipeline: localElectronExportPipeline,
  },
];
