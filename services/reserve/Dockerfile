FROM mhart/alpine-node:8.0.0

MAINTAINER Dalibor Gogic <mail@daliborgogic.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install pm2 -g

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

COPY package.json .
RUN npm install --production
COPY . .

CMD ["npm", "start"]
