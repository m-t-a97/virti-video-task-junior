# Build Stage

FROM node:14 as build-deps

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . ./

RUN yarn build

# Production Stage

FROM nginx:1.21.3

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
