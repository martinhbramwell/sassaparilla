#!/bin/bash
#
if [ ! -f "config.sh" ]; then
  echo "Please copy 'example.config.sh' to 'config.sh' and make any necessary corrections. "
  echo "cp example.config.sh config.sh "
  exit
fi

export PROJ=${PWD##*/}

source config.sh
export TARGET_SERVER_URL="https://${TARGET_SERVER}/"

echo "### Configuration for your '"${PROJ}"' project is :"
echo "   ~                                      Target Server is  : " ${TARGET_SERVER_URL}
echo "   ~ Align android-sdk bundle on "$ALIGNMENT"-byte boundary when using : " $ZIPALIGN_PATH
echo "   ~                              Temporary build directory : " ${BUILD_DIRECTORY}
echo "### ~   ~   ~    " 

mkdir -p ${BUILD_DIRECTORY}

echo "Building project : ${PROJ} in ${BUILD_DIRECTORY}"
exit
meteor build ${BUILD_DIRECTORY}        --server=https://www.fleetingclouds.com/
mv ${BUILD_DIRECTORY}/android/unaligned.apk ${BUILD_DIRECTORY}/android/${PROJ}_unaligned.apk
meteor build ${BUILD_DIRECTORY} --debug --server=https://www.fleetingclouds.com/
#
#
pushd ${BUILD_DIRECTORY}
pushd ./android > /dev/null
jarsigner -storepass 34erDFCV-*-* -tsa http://timestamp.digicert.com -digestalg SHA1 ${PROJ}_unaligned.apk ${PROJ}
${ZIPALIGN_PATH}/zipalign -f -v ${ALIGNMENT} ${PROJ}_unaligned.apk ${PROJ}_aligned.apk
# ${ZIPALIGN_PATH}/zipalign -c -v ${ALIGNMENT} ${PROJ}_aligned.apk
#
mv ${PROJ}_aligned.apk ..
mv unaligned.apk ../${PROJ}.apk
popd > /dev/null
#
echo "Uploading . . . "
scp ${PROJ}.* www.fleetingclouds.com:~/incoming
#
echo "Installing . . . "
ssh www.fleetingclouds.com "sudo -u meteor /home/meteor/installProj.sh ${PROJ}"
#
echo "Restarting . . . "
ssh www.fleetingclouds.com "sudo -u root /home/meteor/restartMeteor.sh"
#
popd > /dev/null