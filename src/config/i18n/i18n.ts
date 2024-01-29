import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];
export const localePrefix = 'always';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (locales.find((l) => l === locale) === undefined) notFound();

  return {
    messages: (await import(`@/config/i18n/messages/${locale}.json`)).default,
    timeZone: 'Asia/Kolkata',
    now: new Date(),
  };
});
