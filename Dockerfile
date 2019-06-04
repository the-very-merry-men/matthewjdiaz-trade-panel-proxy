FROM node:7.6-alpine

RUN mkdir -p /src

WORKDIR /src

COPY . /src

RUN yarn install

EXPOSE 3000

CMD [ "sh", "-c", "npm run server-dev" ]