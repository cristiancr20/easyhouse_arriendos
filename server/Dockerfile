FROM node:14-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD ["npm", "run", "dev"]