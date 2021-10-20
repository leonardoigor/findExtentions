@echo off

 
cmd /k docker compose -f docker-compose.yml -p languagesFind down --volumes --rmi all

exit