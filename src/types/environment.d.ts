/* eslint-disable unused-imports/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    
  }
}

// Use type safe message keys with `next-intl`
type Messages = typeof import('@/config/i18n/messages/en.json');
declare interface IntlMessages extends Messages {}
