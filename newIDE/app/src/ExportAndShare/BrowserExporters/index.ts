// @ts-expect-error - TS6142 - Module '../ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
import {Exporter} from '../ShareDialog';
// @ts-expect-error - TS6142 - Module './BrowserOnlineCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserOnlineCordovaExport.tsx', but '--jsx' is not set.
import { browserOnlineCordovaExportPipeline } from './BrowserOnlineCordovaExport';
// @ts-expect-error - TS6142 - Module './BrowserOnlineCordovaIosExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserOnlineCordovaIosExport.tsx', but '--jsx' is not set.
import { browserOnlineCordovaIosExportPipeline } from './BrowserOnlineCordovaIosExport';
// @ts-expect-error - TS6142 - Module './BrowserOnlineElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserOnlineElectronExport.tsx', but '--jsx' is not set.
import { browserOnlineElectronExportPipeline } from './BrowserOnlineElectronExport';
// @ts-expect-error - TS6142 - Module './BrowserOnlineWebExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserOnlineWebExport.tsx', but '--jsx' is not set.
import { browserOnlineWebExportPipeline } from './BrowserOnlineWebExport';
// @ts-expect-error - TS6142 - Module './BrowserHTML5Export' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserHTML5Export.tsx', but '--jsx' is not set.
import { browserHTML5ExportPipeline } from './BrowserHTML5Export';
// @ts-expect-error - TS6142 - Module './BrowserCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserCordovaExport.tsx', but '--jsx' is not set.
import { browserCordovaExportPipeline } from './BrowserCordovaExport';
// @ts-expect-error - TS6142 - Module './BrowserElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserElectronExport.tsx', but '--jsx' is not set.
import { browserElectronExportPipeline } from './BrowserElectronExport';
// @ts-expect-error - TS6142 - Module './BrowserFacebookInstantGamesExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserFacebookInstantGamesExport.tsx', but '--jsx' is not set.
import { browserFacebookInstantGamesExportPipeline } from './BrowserFacebookInstantGamesExport';
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

export const browserOnlineWebExporter: Exporter = {
  ...onlineWebExporter,
  exportPipeline: browserOnlineWebExportPipeline,
};

export const browserAutomatedExporters: Array<Exporter> = [
  {
    ...html5Exporter,
    exportPipeline: browserHTML5ExportPipeline,
  },
  {
    ...onlineCordovaExporter,
    exportPipeline: browserOnlineCordovaExportPipeline,
  },
  {
    ...onlineCordovaIosExporter,
    exportPipeline: browserOnlineCordovaIosExportPipeline,
  },
  {
    ...onlineElectronExporter,
    exportPipeline: browserOnlineElectronExportPipeline,
  },
  {
    ...facebookInstantGamesExporter,
    exportPipeline: browserFacebookInstantGamesExportPipeline,
  },
];

export const browserManualExporters: Array<Exporter> = [
  {
    ...html5Exporter,
    exportPipeline: browserHTML5ExportPipeline,
  },
  {
    ...cordovaExporter,
    exportPipeline: browserCordovaExportPipeline,
  },
  {
    ...electronExporter,
    exportPipeline: browserElectronExportPipeline,
  },
];
