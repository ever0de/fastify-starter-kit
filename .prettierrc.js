module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: false,
  trailingComma: "all",
  semi: true,

  // @trivago/prettier-plugin-sort-imports
  importOrder: ["<THIRD_PARTY_MODULES>", "@/(.*)$", "^[./](.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
