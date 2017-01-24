'use strict';


module.exports = function(app) {
  app.addService('assetsUrlBuilder', require('./url-builder'));
  app.addHelper('assets', require('./helper'));

  // 其他插件可以取得assetsHandler扩展资源处理器
  app.ploverAssetsHandler = require('./handler');

  const settings = app.settings;
  const config = settings.assets || (settings.assets = {});

  if (settings.development || config.enableMiddleware) {
    app.addMiddleware(require('./middleware'), 0);
  }
};

