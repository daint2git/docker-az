# demo

## build image

```bash
docker build -t my_nginx .
```

## run container

```bash
docker run -it -p 8080:80 --name n_my_nginx my_nginx
```

## exec container

```bash
docker exec -it n_my_nginx bash
```

## stop container

```bash
docker stop n_my_nginx
```

## nginx cli

```bash
# verify config
nginx -t

# show config
nginx -T

# reload
nginx -s reload
```
