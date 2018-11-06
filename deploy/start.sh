#!/usr/bin/env bash

set -e

pushd /var/www/html/portfolio/budget2
/usr/local/bin/forever start app.js
popd
pushd /var/www/html/portfolio/chest_tracker/
/usr/local/bin/forever start index.js
popd
