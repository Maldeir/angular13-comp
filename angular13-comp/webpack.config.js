const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

//MODIFICATION: Change the name
module.exports = withModuleFederationPlugin({

  name: 'comp',
  exposes: {
    './routes': './src/app/base-comp/base-comp.routes.ts',
    './Module': './src/app/base-comp/base-comp.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
