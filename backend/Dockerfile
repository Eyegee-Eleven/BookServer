FROM node:8.10-alpine

RUN mkdir -p /backend/app

WORKDIR /backend/app

COPY . /backend/app

RUN npm install

RUN npm install knex

RUN npx knex migrate:latest

EXPOSE 3001

CMD ["npm", "start"]