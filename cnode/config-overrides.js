const { override, fixBabelImports } = require('customize-cra')

// 按需加载ant
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);