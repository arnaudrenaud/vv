# vv

## Development

Run in development environment with live reloading:

```
PORT=3000 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

## Deployment

Run in production environment:

```
PORT=3000 ./deploy-origin-main.sh
```
