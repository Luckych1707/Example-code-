#!/bin/bash

set -xeo pipefail

rsync -avh -e "ssh -o StrictHostKeyChecking=no" "./" $REMOTE_ADDRESS:$REMOTE_DIR

ssh -t $REMOTE_ADDRESS -p $REMOTE_PORT <<EOF

cd $REMOTE_DIR

yarn install
yarn build

EOF
