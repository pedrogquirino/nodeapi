FROM node:10

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD [ "node", "./src/server.js" ]