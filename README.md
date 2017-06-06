# Reservations

```bash
# build and run all the containers in a deamon mode
$ docker-compose -f docker-compose.yml up -d

# build independently
$ docker-compose -f docker-compose.yml build [container_name] && \
  docker-compose -f docker-compose.yml up -d [container_name]
```
