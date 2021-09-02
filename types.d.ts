import { ElectronRequest as ElectronRequestBase, SocketRequest as SocketRequestBase } from "@advanced-rest-client/electron-request";
import { OAuth2Handler as OAuth2HandlerBase } from "@advanced-rest-client/electron-oauth2/renderer/OAuth2Handler";
import { ElectronAmfService as ElectronAmfServiceBase } from "@advanced-rest-client/electron-amf-service";
import { Clipboard, IpcRenderer } from "electron";
import { CookieBridge as CookieBridgeBase } from "./src/preload/CookieBridge";
import { EncryptionService as EncryptionServiceBase } from "./src/preload/EncryptionService";
import { ThemeManager as ThemeManagerBase } from "./src/preload/ThemeManager";
import { WorkspaceManager as WorkspaceManagerBase } from "./src/preload/WorkspaceManager";
import { WindowProxy as WindowProxyBase } from "./src/preload/WindowProxy";
import { PreferencesProxy as PreferencesProxyBase } from "./src/preload/PreferencesProxy";
import { ImportFilePreProcessor as ImportFilePreProcessorBase } from "./src/preload/ImportFilePreProcessor";
import { FilesystemProxy as FilesystemProxyBase } from "./src/preload/FilesystemProxy";
import { ApplicationSearchProxy as ApplicationSearchProxyBase } from "./src/preload/ApplicationSearchProxy";
import { AppStateProxy as AppStateProxyBase } from "./src/preload/AppStateProxy";
import { GoogleDriveProxy as GoogleDriveProxyBase } from "./src/preload/GoogleDriveProxy";
import { GoogleAnalytics as GoogleAnalyticsBase } from "./src/preload/GoogleAnalytics";
import { HttpProxy as HttpProxyBase } from "./src/preload/HttpProxy";
import logger from "electron-log";

// declare global {
//   interface Global {
//     ipc: IpcRenderer;
//   }
// }
interface Window {
  ipc: IpcRenderer;
}

declare interface AppVersionInfo {
  chrome: string;
  appVersion: string;
}

declare global {
  var ipc: IpcRenderer;
  var clipboard: Clipboard;
  var logger: logger.ElectronLog;
  var versionInfo: AppVersionInfo;
  class AppStateProxy extends AppStateProxyBase {}
  class WorkspaceManager extends WorkspaceManagerBase {}
  class EncryptionService extends EncryptionServiceBase {}
  class ThemeManager extends ThemeManagerBase {}
  class ElectronRequest extends ElectronRequestBase {}
  class SocketRequest extends SocketRequestBase {}
  class CookieBridge extends CookieBridgeBase {}
  class WindowManagerProxy extends WindowProxyBase {}
  class PreferencesProxy extends PreferencesProxyBase {}
  class OAuth2Handler extends OAuth2HandlerBase {}
  class ImportFilePreProcessor extends ImportFilePreProcessorBase {}
  class FilesystemProxy extends FilesystemProxyBase {}
  class ApplicationSearchProxy extends ApplicationSearchProxyBase {}
  class GoogleDriveProxy extends GoogleDriveProxyBase {}
  class ElectronAmfService extends ElectronAmfServiceBase {}
  class GoogleAnalytics extends GoogleAnalyticsBase {}
  class HttpProxy extends HttpProxyBase {}
}
