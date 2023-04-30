"use strict";
var path = require('path');
module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'src/app/index.tsx');
        paths.appSrc = path.resolve(__dirname, 'src/app');
        return paths;
    },
};
