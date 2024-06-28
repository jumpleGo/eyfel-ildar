FROM node:18

WORKDIR /eyfel

RUN npm ci
RUN npm run build


CMD ["npm", "run", "start"]
