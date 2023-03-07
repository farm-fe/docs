/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'quick-start',
    'why-farm',
    {
      type: 'category',
      label: 'Features',
      items: ['features/html', 'features/css', 'features/script', 'features/static', 'features/lazy-compilation', 'features/partial-bundling'],
    },
    'performance',
  ],
  configSidebar: [
    'config/farm-config',
    'config/cli'
  ],
  pluginSidebar: [
    'plugins/overview',
    'plugins/rust-plugin',
    'plugins/js-plugin',
  ]
};

module.exports = sidebars;
