FROM node:14.16-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .