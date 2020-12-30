FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5002

CMD [ "node", "server.js" ]
