FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g npm@10.8.1
RUN npm ci
RUN NODE_OPTIONS=--max-old-space-size=4096 npm build

EXPOSE 3000

CMD ["npm", "run", "start"]
