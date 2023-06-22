module.exports = {
  siteName: 'Poultry',
  copyright: 'SYSTEEL®',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|zh))*\/login/, /(\/(en|zh))*\/secondary\/(.*)/],
    },
    {
      name: 'secondary',  // add secundary layouts 07 / 05 / 2023
      include: [/(\/(en|zh))*\/secondary\/(.*)/],  // add secundary layouts 07 / 05 / 2023
    },
  ],

  /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'pt-br',
        title: 'Português',
        flag: '/portugal.svg',
      },
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
      {
        key: 'fr',
        title: 'French',
        flag: '/france.png',
      },
      {
        key: 'es',
        title: 'Español',
        flag: '/spain.png',
      },
      {
        key: 'ar',
        title: 'عربي',
        flag: '/saudi-arabia.png',
      },
      {
        key: 'zh',
        title: '中文',
        flag: '/china.svg',
      },
    ],
    defaultLanguage: 'en',
  },
}
