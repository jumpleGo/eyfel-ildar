FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g npm@10.8.1
RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
