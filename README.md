# Weblab6
lab6 for Advanced web
## TEST CASES
- vscode REST CLIENT extention is use for test cases.
- .http files are test cases
## run docker if exists
- docker --version 
- docker run hello-world

## run redis inside docker
- check if docker already running
- docker ps
- if not then run the following docker
- docker run -d --name week7-redis -p 6379:6379 redis:7-alpine 
- Or you can start "docker start week7-redis"

## run npm
- cd week7-task-api
- npm install
- npm run dev 
