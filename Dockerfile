FROM node:20-bullseye

RUN mkdir -p /home/sites/data
WORKDIR /home/sites

COPY . .

RUN npm install && npm run build && npm run db:migrations

ENV PATH /home/sites/node_modules/.bin:$PATH
