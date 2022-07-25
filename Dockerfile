FROM node:16.16.0-alpine3.15 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./app/build /usr/share/nginx/html
