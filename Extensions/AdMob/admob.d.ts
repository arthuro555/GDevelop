namespace ads {
  /** @internal */
  export type MobileAdOptions = {
    id?: string;

    adUnitId: string;

    contentUrl?: string;

    keywords?: string[];

    npa?: '1' | '0';
  };

  /** @internal */
  export declare class MobileAd<T extends MobileAdOptions = MobileAdOptions> {
    readonly id: string;

    protected readonly opts: T;

    private _initPromise;

    constructor(opts: T);

    private static get allAds();

    static getAdById(id: string): MobileAd<MobileAdOptions>;

    get adUnitId(): string;

    on(...args: Parameters<typeof document.addEventListener>): () => void;

    protected isLoaded(): Promise<boolean>;

    protected load(): Promise<void>;

    protected show(opts?: Record<string, unknown>): Promise<unknown>;

    protected hide(): Promise<unknown>;

    protected init(): Promise<unknown>;

    private _init;
  }

  export declare class AppOpenAd extends MobileAd<MobileAdOptions> {
    static readonly cls = 'AppOpenAd';

    isLoaded(): Promise<boolean>;

    load(): Promise<void>;

    show(): Promise<boolean>;
  }

  type Position = 'top' | 'bottom';
  export declare enum AdSizeType {
    BANNER = 0,
    LARGE_BANNER = 1,
    MEDIUM_RECTANGLE = 2,
    FULL_BANNER = 3,
    LEADERBOARD = 4,
    SMART_BANNER = 5,
  }
  type BannerSize =
    | AdSizeType
    | {
        width: number;
        height: number;
      }
    | {
        adaptive: 'anchored';
        orientation?: 'portrait' | 'landscape';
        width?: number;
      }
    | {
        adaptive: 'inline';
        maxHeight: number;
        width?: number;
      };
  export interface BannerAdOptions extends MobileAdOptions {
    position?: Position;
    size?: BannerSize;
    offset?: number;
  }
  export declare class BannerAd extends MobileAd<BannerAdOptions> {
    static readonly cls = 'BannerAd';
    private _loaded;
    constructor(opts: BannerAdOptions);
    static config(opts: {
      backgroundColor?: string;
      marginTop?: number;
      marginBottom?: number;
    }): false | Promise<unknown>;
    load(): Promise<void>;
    show(): Promise<unknown>;
    hide(): Promise<unknown>;
  }
  export declare class InterstitialAd extends MobileAd<MobileAdOptions> {
    static readonly cls = 'InterstitialAd';
    isLoaded(): Promise<boolean>;
    load(): Promise<void>;
    show(): Promise<unknown>;
  }
  type ShowOptions = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  export interface NativeAdOptions extends MobileAdOptions {
    view?: string;
  }
  export declare class NativeAd extends MobileAd<NativeAdOptions> {
    static readonly cls = 'NativeAd';
    isLoaded(): Promise<boolean>;
    hide(): Promise<unknown>;
    load(): Promise<void>;
    show(opts?: ShowOptions): Promise<unknown>;
    showWith(elm: HTMLElement): Promise<void>;
  }
  export type RewardedInterstitialAdOptions = RewardedAdOptions;
  export declare class RewardedInterstitialAd extends MobileAd<RewardedInterstitialAdOptions> {
    static readonly cls = 'RewardedInterstitialAd';
    isLoaded(): Promise<boolean>;
    load(): Promise<void>;
    show(): Promise<unknown>;
  }
  export interface ServerSideVerificationOptions {
    customData?: string;
    userId?: string;
  }
  export interface RewardedAdOptions extends MobileAdOptions {
    serverSideVerification?: ServerSideVerificationOptions;
  }
  export declare class RewardedAd extends MobileAd<RewardedAdOptions> {
    static readonly cls = 'RewardedAd';
    isLoaded(): Promise<boolean>;
    load(): Promise<void>;
    show(): Promise<unknown>;
  }
  export interface WebViewAdOptions extends MobileAdOptions {
    src?: string;
    adsense: string;
    npa?: '1';
  }
  export declare class WebViewAd extends MobileAd<WebViewAdOptions> {
    static readonly cls = 'WebViewAd';
    static checkIntegration(): Promise<void>;
    private _loaded;
    private _src;
    private _adsense;
    private _originalHref;
    private _historyCurrentHref;
    constructor(opts: WebViewAdOptions);
    addAd(options: {
      element: HTMLElement;
      slot: string;
      format?: string;
      fullWidth?: boolean;
      html?: string;
    }): boolean;
    private nodeScriptReplace;
    private nodeScriptClone;
    private isNodeScript;
    private historyReplaceState;
    private historySetPage;
    private historyOriginalHref;
    private historyCurrentHref;
    private historyRestoreOriginalHref;
    show(): Promise<unknown>;
  }
}

export declare const CordovaService = 'AdMob';
export type CordovaAction =
  | 'adCreate'
  | 'adHide'
  | 'adIsLoaded'
  | 'adLoad'
  | 'adShow'
  | 'bannerConfig'
  | 'configure'
  | 'ready'
  | 'start'
  | 'webviewGoto';
export declare enum Events {
  adClick = 'admob.ad.click',
  adDismiss = 'admob.ad.dismiss',
  adImpression = 'admob.ad.impression',
  adLoad = 'admob.ad.load',
  adLoadFail = 'admob.ad.loadfail',
  adReward = 'admob.ad.reward',
  adShow = 'admob.ad.show',
  adShowFail = 'admob.ad.showfail',
  bannerSize = 'admob.banner.size',
  ready = 'admob.ready',
}
export declare const enum Platform {
  android = 'android',
  ios = 'ios',
}
/**
 * An enum that represents the maximum ad content rating for an app or ad request.
 * @enum {string}
 */
type MaxAdContentRating =
  /** Content suitable for general audiences, including families. */
  | 'G'
  | /** Content suitable only for mature audiences. */ 'MA'
  | /** Content suitable for most audiences with parental guidance. */ 'PG'
  | /** Content suitable for teen and older audiences. */ 'T'
  | /** Content suitability is unspecified. */ '';
export interface RequestConfig {
  maxAdContentRating?: MaxAdContentRating;
  tagForChildDirectedTreatment?: boolean | null;
  tagForUnderAgeOfConsent?: boolean | null;
  testDeviceIds?: string[];
}
export interface AdMobConfig extends RequestConfig {
  appMuted?: boolean;
  appVolume?: number;
  /** @deprecated Use publisherFirstPartyIDEnabled instead */
  sameAppKey?: boolean;
  publisherFirstPartyIDEnabled?: boolean;
}

export declare class AdMob {
  readonly AppOpenAd: typeof ads.AppOpenAd;

  readonly BannerAd: typeof ads.BannerAd;

  readonly InterstitialAd: typeof ads.InterstitialAd;

  readonly NativeAd: typeof ads.NativeAd;

  readonly RewardedAd: typeof ads.RewardedAd;

  readonly RewardedInterstitialAd: typeof ads.RewardedInterstitialAd;

  readonly WebViewAd: typeof ads.WebViewAd;

  readonly Events: typeof Events;

  configure(config: AdMobConfig): Promise<void>;
  start(): Promise<{
    version: string;
  }>;
}

declare global {
  const admob: AdMob;
}
