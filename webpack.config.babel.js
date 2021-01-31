import path from 'path'

export default {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'server_names'
  },
  devtool: 'source-map',
}
