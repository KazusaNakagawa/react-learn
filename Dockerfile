FROM alpine
ENV wkdir react-app

WORKDIR /usr/app/$wkdir

RUN apk add nodejs
RUN apk add npm
RUN npm i -g create-react-app

ENTRYPOINT sh