# learn React
React


``` dockerfile
# dockerfile
FROM alpine
ENV wkdir react-app

WORKDIR /usr/app/$wkdir

RUN apk add nodejs
RUN apk add npm
RUN npm i -g create-react-app

ENTRYPOINT sh
```
```
# build {-t: add imege name}
$ docker build -t <image name> .
```

- docker起動: マウント場所  
  host : ~/react/react-app  
  container : /usr/app/react-app
```
$ docker run -it --name react-app -p 3000:3000 -v ~/react/react-app:/usr/app/react-app react
```
- create react
```
$ create-react-app react-on-docker
```

## 移動、実行
```
$ cd react-on-docker
$ npm start
```
## 再度作業

### コンテナ立ち上げ
```
$ docker start react-app
```

### コンテナ入る
```
$ docker exec -it react-app sh
```

## 参考
 - https://qiita.com/yuuyun/items/7abd9a0c69165d9bb0db
