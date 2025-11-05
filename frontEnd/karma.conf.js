const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/setupTests.js',
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/setupTests.js': ['webpack'],
      'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          // JSX y JS
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
          // CSS
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          },
          // Imágenes
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            type: 'asset/inline'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          fireapp: path.resolve(__dirname, 'src/firebase.js'),
          fireauth: path.resolve(__dirname, 'src/components/firebaseUtils.js') 
        }
      }
    },

    reporters: ['spec', 'coverage'],
    specReporter: {
      suppressPassed: false,
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
