FROM node:20-bullseye

RUN apt-get update && apt-get install -y openssl sqlite3

RUN mkdir -p /home/sites/data
WORKDIR /home/sites

COPY . .

RUN npm install && npm run build && npm run db:migrations

CMD ["npm", "run", "start"]
