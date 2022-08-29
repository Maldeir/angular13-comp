const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

//MODIFICATION: Change the name
module.exports = withModuleFederationPlugin({

  name: 'comp',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
