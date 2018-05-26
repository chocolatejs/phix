
### getting mobX to work with storybook (inside of custom-react-scripts CRA app)
* `.babelrc` in root w/ presets for `es2015`, `stage-0`, and `react` and plugin `transform-decorators-legacy`
* `npm install --save-dev` for 
   * babel-plugin-transform-decorators-legacy
   * babel-preset-stage-0
   * babel-preset-es2015
   
### webpack.config.js in /.storybook for enabling CSS modules
* by default storybook will key off CRA's default config, but because it's actually custom-react-scripts, we need to modify the webpack config to understand CSS as modules
* below is the config i used that got it working
```
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
           test: /\.(png|jpg|gif|svg)$/,
           use: [ 'file-loader' ]
        }
    ],
  },
}
````
