# vv

## Development

Run in development environment with live reloading:

```
docker-compose build
PORT=3000 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## Deployment

Run in production environment:
```
docker-compose build
PORT=3000 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```