import path from 'path'

export default {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'ServerNames',
    libraryExport: 'default'
  },
  devtool: 'source-map',
}
