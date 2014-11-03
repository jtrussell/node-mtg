/*global rm, exec, config */

'use strict';

require('shelljs/global');
config.silent = true;

var doxbin = '"./node_modules/.bin/dox"';

rm('-rf', 'docs/json/master');

// DB
mkdir('-p', 'docs/json/master/db');

exec(doxbin + ' < lib/db/index.js').output
  .to('docs/json/master/db/index.json');

exec(doxbin + ' < lib/db/load.js').output
  .to('docs/json/master/db/load.json');

exec(doxbin + ' < lib/db/truncate.js').output
  .to('docs/json/master/db/truncate.json');

// Card
mkdir('-p', 'docs/json/master/card');

exec(doxbin + ' < lib/card/index.js').output
  .to('docs/json/master/card/index.json');

exec(doxbin + ' < lib/card/info.js').output
  .to('docs/json/master/card/info.json');

// Deck
mkdir('-p', 'docs/json/master/deck');

exec(doxbin + ' < lib/deck/index.js').output
  .to('docs/json/master/deck/index.json');

exec(doxbin + ' < lib/deck/curve.js').output
  .to('docs/json/master/deck/curve.json');

