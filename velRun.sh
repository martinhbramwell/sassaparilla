#!/bin/bash
#
if [ ! -f "config.sh" ]; then
  echo "Please copy 'example.config.sh' to 'config.sh' and make any necessary corrections. "
  echo "cp example.config.sh config.sh "
  exit
fi
source config.sh
echo "### Configuration is :"
echo "   ~  Connect to  Mongo server : " $MONGO_URL
echo "   ~  Running in demo mode : " $DEMO_MODE
echo "### ~   ~   ~    "

# meteor add xolvio:webdriver
meteor add xolvio:cucumber
meteor --settings=settings.json



