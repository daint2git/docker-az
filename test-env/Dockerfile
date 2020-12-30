
FROM node:12-alpine

WORKDIR /usr/app

ARG TEST_ARG=xxx

RUN echo $TEST_ENV
RUN echo $TEST_ARG
RUN echo env

COPY ./index.js ./

CMD ["sh", "-c", "node index.js"]
