# Reservations

```bash
# build and run all the containers in a deamon mode
$ docker-compose -f docker-compose.yml up -d

# build independently
$ docker-compose -f docker-compose.yml build [container_name] && \
  docker-compose -f docker-compose.yml up -d [container_name]
```
docker-compose -f docker-compose.yml build nginx && docker-compose -f docker-compose.yml up -d nginx
docker-compose -f docker-compose.yml build reserve && docker-compose -f docker-compose.yml up -d reserve
docker-compose -f docker-compose.yml build landing && docker-compose -f docker-compose.yml up -d landing

sudo docker exec -i -t res_service_reserve  /bin/sh
