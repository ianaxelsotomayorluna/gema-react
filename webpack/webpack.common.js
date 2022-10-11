const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/javascript/index.tsx'),
  },
  // Crear shortcuts para paths absolutos
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      Pages: path.resolve(__dirname, '../src/javascript/cPages'),
      GlobalProvider: path.resolve(__dirname, '../src/javascript/GlobalProvider'),
      CComps: path.resolve(__dirname, '../src/javascript/commonComps'),
      Utils: path.resolve(__dirname, '../src/javascript/cUtils'),
      Others: path.resolve(__dirname, '../src/javascript/others'),
      AppConfig: path.resolve(__dirname, '../src/javascript/appConfig'),
      Requests: path.resolve(__dirname, '../src/javascript/requests'),
      Redux: path.resolve(__dirname, '../src/javascript/redux'),
      '@Redux': path.resolve(__dirname, '../src/javascript/redux'),
      '@Declarations': path.resolve(__dirname, '../src/javascript/declarations.d.ts'),
      Images: path.resolve(__dirname, '../src/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: {
          loader: 'url-loader', // incluir url loader
          options: {
            limit: 1,
            name: '[name].[ext]',
            outputPath: 'media/',
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(?:ico|gif|png|webp|jpg|jpeg|mp4)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
    // filename: 'papu-bundle-[name].js'
    filename: 'javascript/[name].js', // name corresponde a los nombres key de el objeto entry
    publicPath: '/',
    assetModuleFilename: 'media/[hash][ext][query]',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process',
    }),
  ],
  stats: 'errors-only',
};
