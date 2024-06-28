FROM node:18

WORKDIR /app

RUN npm ci
RUN npm run build


CMD ["npm", "run", "start"]
