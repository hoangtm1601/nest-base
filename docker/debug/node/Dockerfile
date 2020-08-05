FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "start:dev"]
