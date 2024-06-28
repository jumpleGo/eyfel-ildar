FROM node:18

WORKDIR /eyfel

COPY package*.json ./
RUN npm ci
RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "start"]
