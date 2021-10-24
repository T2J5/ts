const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // 从后向前执行
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义环境
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      "chrome": '88',
                      "ie": '11',
                    },
                    // core-js 版本
                    'corejs': '3',
                    // 按需加载
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'ts'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }

}