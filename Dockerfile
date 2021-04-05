FROM node:10-alpine

WORKDIR /usr/src/app

RUN pwd
COPY package*.json ./
RUN ls -la
# RUN yarn cache clean && yarn --update-checksums
# COPY . ./
# EXPOSE 3000
# CMD ["yarn", "start"]
