#!/bin/sh

echo Pulling latest changes...
git pull

echo Pulling latest images...
docker compose pull

# Restart services
docker compose up -d --build

# Cleanup
echo Cleaning unused containers
docker system prune -a -f

echo Deployment complete
