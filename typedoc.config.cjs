/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: ['./src/index.ts', './src/types.ts'],
  compilerOptions: {},
  name: 'Toy Hammer',
  pretty: true,
  plugin: ['typedoc-plugin-extras'],
  sort: ['source-order'],
  media: 'media',
  categorizeByGroup: false,
  searchCategoryBoosts: {},
  searchGroupBoosts: {},
  preserveWatchOutput: false,
  visibilityFilters: {
    protected: false,
    private: false,
    inherited: true,
    external: false,
    '@alpha': false,
    '@beta': false,
  },
  navigationLinks: {
    '🐈‍⬛': 'https://github.com/binghuis/toy-hammer',
  },
  favicon: 'https://raw.githubusercontent.com/binghuis/assets/main/imgs/icons8-hammer-64.png',
};
