# api-proto
The proto definition of the api of tb/jd/pdd

## Build
### Golang

```shell
make go
```

### Typescript

```shell
make ts
```

## Release

```shell
git add .
git commit -m "description"
git push
git tag v0.x.y
git push origin v0.x.y
```

Refer to: https://github.com/improbable-eng/ts-protoc-gen