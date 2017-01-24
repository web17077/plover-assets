'use strict';


const pathUtil = require('path');
const fs = require('fs');

const util = require('./util/util');


module.exports = function(app) {
  app.addHelper('assets', require('./helper'));

  // 其他插件可以取得assetsHandler扩展资源处理器
  app.ploverAssetsHandler = require('./handler');

  const settings = app.settings;
  const config = settings.assets || (settings.assets = {});

  const publicDir = util.getPublicDir(settings);
  const prefix = util.getAssetsPrefix(settings);
  const assetsRoot = pathUtil.join(publicDir, prefix);

  if (settings.development || config.enableMiddleware) {
    app.addMiddleware(require('./middleware'), 0);
  }
};

