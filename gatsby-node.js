/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true,
    },
  })
}

// exports.onCreateWebpackConfig = ({ loader }) => {
//   actions.setWebpackConfig({
//     module: {
//       loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
//     },
//   })
// }
