const { override, fixBabelImports, addLessLoader } = require('customize-cra')

// 按需加载ant
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);

// 定制主题 参考： https://ant.design/docs/react/customize-theme-cn
// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true,
//   }),
//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { }
//   })
// );