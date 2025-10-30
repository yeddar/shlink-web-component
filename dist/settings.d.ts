import { FC } from 'react';
import { Order } from '@shlinkio/shlink-frontend-kit';
import { Provider } from 'react';
import { Theme } from '@shlinkio/shlink-frontend-kit';

export declare type DateInterval = 'today' | 'yesterday' | 'last7Days' | 'last30Days' | 'last90Days' | 'last180Days' | 'last365Days' | 'all';

export declare const defaultQrCodeSettings: QrCodeSettings;

export declare const defaultVisitsListColumns: Required<VisitsListSettings['columns']>;

export declare type QrCodeFormat = 'png' | 'svg' | 'jpeg' | 'webp';

export declare type QrCodeSettings = {
    size: number;
    format: QrCodeFormat;
    margin: number;
    errorCorrection: QrErrorCorrection;
    color: string;
    bgColor: string;
    logo?: {
        url: string;
        name: string;
    };
};

export declare type QrErrorCorrection = 'L' | 'M' | 'Q' | 'H';

/**
 * Important! When adding new props in the main Settings interface or any of the nested props, they have to be set as
 * optional, as old instances of the app will load partial objects from local storage until it is saved again.
 */
export declare type RealTimeUpdatesSettings = {
    enabled: boolean;
    interval?: number;
};

export declare type Settings = {
    realTimeUpdates?: RealTimeUpdatesSettings;
    shortUrlCreation?: ShortUrlCreationSettings;
    shortUrlsList?: ShortUrlsListSettings;
    visits?: VisitsSettings;
    visitsList?: VisitsListSettings;
    tags?: TagsSettings;
    ui?: UiSettings;
    qrCodes?: QrCodeSettings;
};

export declare const SettingsProvider: Provider<Settings>;

export declare const ShlinkWebSettings: FC<ShlinkWebSettingsProps>;

declare type ShlinkWebSettingsProps = {
    settings: Settings;
    defaultShortUrlsListOrdering: NonNullable<ShortUrlsListSettings['defaultOrdering']>;
    /** Callback invoked every time the settings are updated */
    onUpdateSettings?: (settings: Settings) => void;
};

export declare type ShortUrlCreationSettings = {
    tagFilteringMode?: TagFilteringMode;
    forwardQuery?: boolean;
    /** @deprecated Shlink 4.0.0 no longer validates URLs */
    validateUrls: boolean;
};

export declare type ShortUrlsListSettings = {
    defaultOrdering?: Order<'dateCreated' | 'shortCode' | 'longUrl' | 'title' | 'visits'>;
    confirmDeletions?: boolean;
};

export declare type TagFilteringMode = 'startsWith' | 'includes';

export declare type TagsSettings = {
    defaultOrdering?: Order<'tag' | 'shortUrls' | 'visits'>;
};

export declare type UiSettings = {
    theme: Theme;
};

export declare function useSetting<Setting extends keyof Settings>(settingName: Setting): Settings[Setting];

export declare function useSetting<Setting extends keyof Settings, Default extends NonNullable<Settings[Setting]>>(settingName: Setting, fallbackValue: Default): NonNullable<Settings[Setting]>;

export declare const useSettings: () => Settings;

export declare type VisitsColumn = 'potentialBot' | 'date' | 'country' | 'region' | 'city' | 'browser' | 'os' | 'userAgent' | 'referer' | 'visitedUrl';

export declare type VisitsListSettings = {
    columns: Partial<Record<VisitsColumn, boolean>>;
};

export declare type VisitsSettings = {
    defaultInterval: DateInterval;
    excludeBots?: boolean;
    loadPrevInterval?: boolean;
};

export { }
