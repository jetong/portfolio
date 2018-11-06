#!/usr/bin/env bash

set -e

pushd /var/www/html/portfolio/budget2
/usr/bin/node /usr/local/lib/node_modules/forever/bin/forever stop app.js
popd
pushd /var/www/html/portfolio/chest_tracker/
/usr/bin/node /usr/local/lib/node_modules/forever/bin/forever stop index.js
popd
