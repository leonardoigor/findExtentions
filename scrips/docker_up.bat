@echo off

cmd /k docker compose -f ../docker-compose.yml -p languagesFind up -d --renew-anon-volumes


exit