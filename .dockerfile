WORKDIR /app

COPY package.json package-lock.json /app/

# Build project
RUN npm install -g npm@10.7.0 && npm ci --cache .npm --prefer-offline

# Copying source files
COPY . /app
RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0
# ENV PORT=3000
USER node

CMD ["npm", "run", "start"]
