#!/usr/bin/env bash

set -e

pushd /var/www/html/portfolio/budget2
/usr/local/bin/forever stop app.js
popd
pushd /var/www/html/portfolio/chest_tracker/
/usr/local/bin/forever stop index.js
popd
