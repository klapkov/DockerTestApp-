FROM node:16.1.0-alpine3.13 AS build

WORKDIR /usr/src/app
COPY . .

FROM node:16.1.0-alpine3.13
WORKDIR /usr/src/app

ENV NODE_ENV=production
COPY --from=build /usr/src/app/. ./
 
CMD [ "npm", "start"]
                     
