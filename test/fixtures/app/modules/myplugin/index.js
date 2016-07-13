'use strict';


const pathUtil = require('path');


module.exports = function(app) {
  require('plover-arttemplate/lib/plugin')(app);

  const root = app.settings.applicationRoot;
  const plugin = require(pathUtil.join(root, '../../../lib/plugin.js'));
  plugin(app);
};

