#**MySql and Node Express Dockerized**

MySql uses port 3306, Node port 5000.

##**Helpful commands.** 

###**Docker**
docker-compose up  --> duh
docker exec -it db_sql mysql -uroot -p --> interactive mode for db 
Stop and remove all docker containers 
docker container stop $(docker container ls -aq)
docker container rm $(docker container ls -aq)


