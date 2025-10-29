import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Button, Checkbox, Input, Label, LabelledInput, SimpleCard } from '@shlinkio/shlink-frontend-kit';
import { clsx } from 'clsx';
import { parseISO } from 'date-fns';
import type { FC, FormEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { ShlinkCreateShortUrlData, ShlinkDeviceLongUrls, ShlinkEditShortUrlData } from '../api-contract';
import { isErrorAction } from '../api-contract/utils';
import type { FCWithDeps } from '../container/utils';
import { componentFactory, useDependencies } from '../container/utils';
import { DomainSelector } from '../domains/DomainSelector';
import type { DomainsList } from '../domains/reducers/domainsList';
import type { TagsSelectorProps } from '../tags/helpers/TagsSelector';
import type { TagsList } from '../tags/reducers/tagsList';
import { IconInput } from '../utils/components/IconInput';
import { formatIsoDate } from '../utils/dates/helpers/date';
import { LabelledDateInput } from '../utils/dates/LabelledDateInput';
import { useFeature } from '../utils/features';
import { hasValue } from '../utils/helpers';
import { ShortUrlFormCheckboxGroup } from './helpers/ShortUrlFormCheckboxGroup';
import { UseExistingIfFoundInfoIcon } from './UseExistingIfFoundInfoIcon';

export interface ShortUrlFormProps<T extends ShlinkCreateShortUrlData | ShlinkEditShortUrlData> {
  basicMode?: boolean;
  saving: boolean;
  initialState: T;
  onSave: (shortUrlData: T) => Promise<unknown>;
}

type ShortUrlFormConnectProps = ShortUrlFormProps<ShlinkCreateShortUrlData | ShlinkEditShortUrlData> & {
  tagsList: TagsList;
  domainsList: DomainsList;
};

type ShortUrlFormDeps = {
  TagsSelector: FC<TagsSelectorProps>;
};

const toDate = (date?: string | Date): Date | undefined => (typeof date === 'string' ? parseISO(date) : date);

const isCreationData = (data: ShlinkCreateShortUrlData | ShlinkEditShortUrlData): data is ShlinkCreateShortUrlData =>
  'shortCodeLength' in data && 'customSlug' in data && 'domain' in data;

const ShortUrlForm: FCWithDeps<ShortUrlFormConnectProps, ShortUrlFormDeps> = (
  { basicMode = false, saving, onSave, initialState, tagsList, domainsList },
) => {
  const { TagsSelector } = useDependencies(ShortUrlForm as unknown as ShortUrlFormDeps);
  const [shortUrlData, setShortUrlData] = useState(initialState);
  const isCreation = isCreationData(shortUrlData);
  const supportsDeviceLongUrls = useFeature('deviceLongUrls');
  const supportsValidatingUrls = useFeature('urlValidation');
  const showExtraChecks = supportsValidatingUrls || isCreation;

  const reset = useCallback(() => setShortUrlData(initialState), [initialState]);
  const setResettableValue = useCallback((value: string, initialValue?: any) => {
    if (hasValue(value)) {
      return value;
    }

    // If an initial value was provided for this when the input is "emptied", explicitly set it to null so that the
    // value gets removed. Otherwise, set undefined so that it gets ignored.
    return hasValue(initialValue) ? null : undefined;
  }, []);
  const changeDeviceLongUrl = useCallback(
    (id: keyof ShlinkDeviceLongUrls, url: string) => setShortUrlData(({ deviceLongUrls = {}, ...prev }) => ({
      ...prev,
      deviceLongUrls: {
        ...deviceLongUrls,
        [id]: setResettableValue(url, initialState.deviceLongUrls?.[id]),
      },
    })),
    [initialState.deviceLongUrls, setResettableValue],
  );
  const changeTags = useCallback((tags: string[]) => setShortUrlData((prev) => ({ ...prev, tags })), []);

  const submit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    return onSave(shortUrlData)
      .then((result) => isCreation && !isErrorAction(result) && reset())
      .catch(() => {});
  }, [isCreation, onSave, reset, shortUrlData]);

  const basicComponents = useMemo(() => (
    <div className="flex flex-col gap-4">
      <Input
        size="lg"
        type="url"
        placeholder="URL to be shortened"
        required
        value={shortUrlData.longUrl}
        onChange={(e) => setShortUrlData((prev) => ({ ...prev, longUrl: e.target.value }))}
      />
      <div className="flex flex-col lg:flex-row gap-4">
        {basicMode && isCreation && (
          <div className="w-full lg:w-1/2">
            <Input
              size="lg"
              placeholder="Custom slug"
              value={shortUrlData.customSlug ?? ''}
              onChange={(e) => setShortUrlData((prev) => ({ ...prev, customSlug: e.target.value }))}
            />
          </div>
        )}
        <div className={clsx('w-full', { 'lg:w-1/2': basicMode })}>
          <TagsSelector tags={tagsList.tags} selectedTags={shortUrlData.tags ?? []} onChange={changeTags} />
        </div>
      </div>
    </div>
  ), [TagsSelector, basicMode, changeTags, isCreation, shortUrlData, tagsList.tags]);

  return (
    <form name="shortUrlForm" onSubmit={submit} className="flex flex-col gap-4">
      {basicMode && basicComponents}
      {!basicMode && (
        <>
          <div>
            <div className={clsx({ 'sm:w-1/2': supportsDeviceLongUrls, 'w-full': !supportsDeviceLongUrls })}>
              <SimpleCard title="Main options" className="card">
                {basicComponents}
              </SimpleCard>
            </div>
            {supportsDeviceLongUrls && (
              <div className="w-full sm:w-1/2">
                <SimpleCard
                  title="Device-specific long URLs"
                  bodyClassName="flex flex-col gap-y-4"
                  className="card"
                >
                  <IconInput
                    type="url"
                    icon={faAndroid}
                    placeholder="Android-specific redirection"
                    value={shortUrlData.deviceLongUrls?.android ?? ''}
                    onChange={({ target }) => changeDeviceLongUrl('android', target.value)}
                  />
                  <IconInput
                    type="url"
                    icon={faApple}
                    placeholder="iOS-specific redirection"
                    value={shortUrlData.deviceLongUrls?.ios ?? ''}
                    onChange={({ target }) => changeDeviceLongUrl('ios', target.value)}
                  />
                  <IconInput
                    type="url"
                    icon={faDesktop}
                    placeholder="Desktop-specific redirection"
                    value={shortUrlData.deviceLongUrls?.desktop ?? ''}
                    onChange={({ target }) => changeDeviceLongUrl('desktop', target.value)}
                  />
                </SimpleCard>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <SimpleCard
                title="Customize the short URL"
                bodyClassName="flex flex-col gap-4"
                className="card h-full"
              >
                <Input
                  placeholder="Title"
                  value={shortUrlData.title ?? ''}
                  onChange={({ target }) => setShortUrlData((prev) => ({
                    ...prev,
                    title: setResettableValue(target.value, initialState.title),
                  }))}
                />
                {isCreation && (
                  <>
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="lg:w-1/2">
                        <Input
                          placeholder="Slug personalitzat"
                          value={shortUrlData.customSlug ?? ''}
                          onChange={(e) => setShortUrlData((prev) => ({ ...prev, customSlug: e.target.value }))}
                          disabled={hasValue(shortUrlData.shortCodeLength)}
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <Input
                          type="number"
                          placeholder="Short code length"
                          value={shortUrlData.shortCodeLength ?? ''}
                          onChange={(e) => setShortUrlData((prev) => ({ ...prev, shortCodeLength: e.target.value }))}
                          min={4}
                          disabled={hasValue(shortUrlData.customSlug)}
                        />
                      </div>
                    </div>
                    <DomainSelector
                      value={shortUrlData.domain}
                      onChange={(domain) => setShortUrlData((prev) => ({ ...prev, domain }))}
                      domains={domainsList.domains}
                    />
                  </>
                )}
              </SimpleCard>
            </div>

            <div className="w-full sm:w-1/2">
              <SimpleCard
                title="Limit access to the short URL"
                className="card h-full"
                bodyClassName="flex flex-col gap-y-4"
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="lg:w-1/2">
                    <LabelledDateInput
                      label="Enabled since"
                      withTime
                      maxDate={shortUrlData.validUntil ? toDate(shortUrlData.validUntil) : undefined}
                      value={shortUrlData.validSince ? toDate(shortUrlData.validSince) : null}
                      onChange={(date) => setShortUrlData((prev) => ({ ...prev, validSince: formatIsoDate(date) }))}
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <LabelledDateInput
                      label="Enabled until"
                      withTime
                      minDate={shortUrlData.validSince ? toDate(shortUrlData.validSince) : undefined}
                      value={shortUrlData.validUntil ? toDate(shortUrlData.validUntil) : null}
                      onChange={(date) => setShortUrlData((prev) => ({ ...prev, validUntil: formatIsoDate(date) }))}
                    />
                  </div>
                </div>

                <LabelledInput
                  label="Maximum visits allowed:"
                  type="number"
                  min={1}
                  placeholder="25..."
                  value={shortUrlData.maxVisits ?? ''}
                  onChange={(e) => setShortUrlData((prev) => ({
                    ...prev,
                    maxVisits: !hasValue(e.target.value) ? null : Number(e.target.value),
                  }))}
                />
              </SimpleCard>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {showExtraChecks && (
              <div className="w-full sm:w-1/2">
                <SimpleCard title="Extra checks" className="h-full">
                  {supportsValidatingUrls && (
                    <ShortUrlFormCheckboxGroup
                      infoTooltip="If checked, Shlink will try to reach the long URL, failing in case it's not publicly accessible."
                      checked={shortUrlData.validateUrl}
                      onChange={(validateUrl) => setShortUrlData((prev) => ({ ...prev, validateUrl }))}
                    >
                      Validate URL
                    </ShortUrlFormCheckboxGroup>
                  )}
                  {isCreation && (
                    <p className="inline-flex items-center gap-x-2">
                      <Label className="inline-flex items-center gap-x-1.5">
                        <Checkbox
                          checked={shortUrlData.findIfExists}
                          onChange={(findIfExists) => setShortUrlData((prev) => ({ ...prev, findIfExists }))}
                        />
                        Use existing URL if found
                      </Label>
                      <UseExistingIfFoundInfoIcon />
                    </p>
                  )}
                </SimpleCard>
              </div>
            )}
            <div className={clsx('w-full', { 'sm:w-1/2': showExtraChecks })}>
              <SimpleCard title="Configure behavior">
                <ShortUrlFormCheckboxGroup
                  infoTooltip="This short URL will be included in the robots.txt for your Shlink instance, allowing web crawlers (like Google) to index it."
                  checked={shortUrlData.crawlable}
                  onChange={(crawlable) => setShortUrlData((prev) => ({ ...prev, crawlable }))}
                >
                  Make it crawlable
                </ShortUrlFormCheckboxGroup>
                <ShortUrlFormCheckboxGroup
                  infoTooltip="When this short URL is visited, any query params appended to it will be forwarded to the long URL."
                  checked={shortUrlData.forwardQuery}
                  onChange={(forwardQuery) => setShortUrlData((prev) => ({ ...prev, forwardQuery }))}
                >
                  Forward query params on redirect
                </ShortUrlFormCheckboxGroup>
              </SimpleCard>
            </div>
          </div>
        </>
      )}

      <div className="text-center">
        <Button type="submit" inline solid disabled={saving || !shortUrlData.longUrl} className="max-md:w-full">
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export const ShortUrlFormFactory = componentFactory(ShortUrlForm, ['TagsSelector']);
