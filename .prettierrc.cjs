module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  printWidth: 100,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['.*', '*.json', '*.md', '*.mdx', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
  ],
};
