FROM node:alpine as builder
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
RUN mkdir /app
COPY --from=builder /usr/app/build /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
