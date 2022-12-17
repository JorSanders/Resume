# Resume

This is the repository for my web based resume.

dev mode

```shell
npm start
```

docker build and run

```shell
docker stop resume &> /dev/null; docker build . -t ghcr.io/jorsanders/resume:local && docker run -p 8080:8080 -it --rm --name resume ghcr.io/jorsanders/resume:local
```

run from built docker image

```shell
docker run -p 8080:8080 -it --rm --name resume ghcr.io/jorsanders/resume:latest
```
