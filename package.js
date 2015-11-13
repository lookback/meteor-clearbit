Package.describe({
  name: 'lookback:clearbit',
  version: '1.2.0_1',
  summary: 'Use Clearbit npm module in Meteor',
  git: 'https://github.com/lookback/meteor-clearbit',
  documentation: 'README.md'
});

Npm.depends({
  clearbit: '1.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('clearbit.js', 'server');
  api.export('clearbit', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lookback:clearbit', 'server');
  api.addFiles('clearbit-tests.js', 'server');
});
