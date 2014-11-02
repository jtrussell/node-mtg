/*global exec, config */

'use strict';

require('shelljs/global');
config.silent = true;

var doxbin = '"./node_modules/.bin/dox"';

exec(doxbin + ' < lib/db/load.js').output
  .to('docs/json/master/db/load.json');

exec(doxbin + ' < lib/db/truncate.js').output
  .to('docs/json/master/db/truncate.json');
