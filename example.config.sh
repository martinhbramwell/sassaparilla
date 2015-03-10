#!/bin/bash
#
## Develop and test settings
export MONGO_URL=mongodb://localhost:27017/sassaparilla

## Build and deploy settings
export BUILD_DIRECTORY=.meteor/shipping/
export TARGET_SERVER=www.fleetingclouds.com
export ZIPALIGN_PATH=~/.meteor/android_bundle/android-sdk/build-tools/21.0.0/
export ALIGNMENT=4


