'use client';

import { useTranslations } from 'next-intl';

export default function ErrorPage() {
  const t = useTranslations('Error');
  return <h1>{t('title')}</h1>;
}
