#! /bin/sh
cd sidedesk
docker-compose down
sed -i -r "s/(pknndev\/sidedesk-serverside):[0-9]+.[0-9]+.[0-9]+/\1:$IMAGE_VERSION/" docker-compose.yml
docker-compose pull
docker-compose up