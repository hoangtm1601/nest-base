FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .

RUN rm -rf dist

RUN npm run build

CMD ["npm", "run", "start:prod"]
