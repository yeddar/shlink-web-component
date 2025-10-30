import { FC } from 'react';
import { HTMLProps } from 'react';
import { Order } from '@shlinkio/shlink-frontend-kit';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';
import { ShlinkApiClient } from '@shlinkio/shlink-js-sdk/api-contract';
import { ShlinkWebComponentProps as ShlinkWebComponentProps_2 } from './ShlinkWebComponent';
import { Theme } from '@shlinkio/shlink-frontend-kit';

declare type DateInterval = 'today' | 'yesterday' | 'last7Days' | 'last30Days' | 'last90Days' | 'last180Days' | 'last365Days' | 'all';

declare type QrCodeFormat = 'png' | 'svg' | 'jpeg' | 'webp';

declare type QrCodeSettings = {
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

declare type QrErrorCorrection = 'L' | 'M' | 'Q' | 'H';

/**
 * Important! When adding new props in the main Settings interface or any of the nested props, they have to be set as
 * optional, as old instances of the app will load partial objects from local storage until it is saved again.
 */
declare type RealTimeUpdatesSettings = {
    enabled: boolean;
    interval?: number;
};

declare type SemVer = `${bigint}.${bigint}.${bigint}`;

declare type SemVerOrLatest = SemVer | 'latest';

declare type Settings = {
    realTimeUpdates?: RealTimeUpdatesSettings;
    shortUrlCreation?: ShortUrlCreationSettings;
    shortUrlsList?: ShortUrlsListSettings;
    visits?: VisitsSettings;
    visitsList?: VisitsListSettings;
    tags?: TagsSettings;
    ui?: UiSettings;
    qrCodes?: QrCodeSettings;
};

export declare const ShlinkSidebarToggleButton: FC<ShlinkSidebarToggleButtonProps>;

export declare type ShlinkSidebarToggleButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'onClick'>;

export declare const ShlinkSidebarVisibilityProvider: FC<PropsWithChildren>;

export declare const ShlinkWebComponent: FC<ShlinkWebComponentProps_2>;

export declare type ShlinkWebComponentProps = {
    serverVersion: SemVerOrLatest;
    apiClient: ShlinkApiClient;
    tagColorsStorage?: TagColorsStorage;
    routesPrefix?: string;
    settings?: Exclude<Settings, 'ui'>;
    createNotFound?: (nonPrefixedHomePath: string) => ReactNode;
    /**
     * Whether to automatically append a responsive sidebar toggle button or not.
     * You can set this to `false` and position your own toggle where it better suits you.
     * Defaults to `true`.
     */
    autoSidebarToggle?: boolean;
};

export declare type ShlinkWebComponentType = typeof ShlinkWebComponent;

declare type ShortUrlCreationSettings = {
    tagFilteringMode?: TagFilteringMode;
    forwardQuery?: boolean;
    /** @deprecated Shlink 4.0.0 no longer validates URLs */
    validateUrls: boolean;
};

declare type ShortUrlsListSettings = {
    defaultOrdering?: Order<'dateCreated' | 'shortCode' | 'longUrl' | 'title' | 'visits'>;
    confirmDeletions?: boolean;
};

export declare type TagColorsStorage = {
    getTagColors(): Record<string, string>;
    storeTagColors(colors: Record<string, string>): void;
};

declare type TagFilteringMode = 'startsWith' | 'includes';

declare type TagsSettings = {
    defaultOrdering?: Order<'tag' | 'shortUrls' | 'visits'>;
};

declare type UiSettings = {
    theme: Theme;
};

declare type VisitsColumn = 'potentialBot' | 'date' | 'country' | 'region' | 'city' | 'browser' | 'os' | 'userAgent' | 'referer' | 'visitedUrl';

declare type VisitsListSettings = {
    columns: Partial<Record<VisitsColumn, boolean>>;
};

declare type VisitsSettings = {
    defaultInterval: DateInterval;
    excludeBots?: boolean;
    loadPrevInterval?: boolean;
};

export { }
