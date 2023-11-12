# develop stage
#ARG gitcommithash
FROM node:20.7-bookworm as develop-stage
WORKDIR /app
#COPY package.json ./
#COPY yarn.lock ./
#COPY quasar.config.js ./
#COPY jsconfig.json ./  
#COPY postcss.config.js ./
#RUN yarn global add @quasar/cli

#build stage
#frontend
FROM develop-stage as build-stage
#COPY . ./
#RUN yarn
#RUN quasar build
##backend
#WORKDIR /app/server
#RUN yarn

##production stage
#WORKDIR /app

EXPOSE 3000
