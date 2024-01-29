import { unstable_setRequestLocale } from "next-intl/server";
import type { LocaleParamPageProps } from "./layout";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function Home({ params }: LocaleParamPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('Index');
  return <Typography variant={'h1'}>{t('title')}</Typography>
}