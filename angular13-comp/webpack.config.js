const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

//MODIFICATION: Change the name
module.exports = withModuleFederationPlugin({

  name: 'comp',
  exposes: {
    './routes': './src/app/base-comp/base-comp.routes.ts',
    './Module': './src/app/base-comp/base-comp.module.ts',
    './HeaderComponent': './src/app/header-comp/header-comp.component.ts'
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'config-lib': { singleton: true, strictVersion: true, requiredVersion: '0.0.2' },
  },

});
