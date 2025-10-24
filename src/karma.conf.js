
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/setupTests.js', // carga configuración previa (RTL, matchers, cleanup)
      'src/**/*.spec.js', // busca tests en src/
      'src/tests/*.test.js' // busca tests en src/tests/
    ],
    preprocessors: {
      'src/setupTests.js': ['webpack'],
      'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    '@babel/preset-env',
                    ['@babel/preset-react', { runtime: 'automatic', development: true }]
                ]
                }
            }
        },
          //regla para imágenes (jpg/png/gif/webp/svg)
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            //use: [{ loader: 'null-loader' }], // Para no cargar imagenes (npm i -D null-loader).
            //type: 'asset/resource', //Cargar imagenes.
            type: 'asset/inline',
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    reporters: ['spec', 'coverage'],
    specReporter: {
      suppressPassed: false, // muestra los passed
      suppressSkipped: true,
      showSpecTiming: true
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    browsers: ['ChromeHeadless'],
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
