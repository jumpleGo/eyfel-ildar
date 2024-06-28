RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app


COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000


CMD ["nuxt", "start"]
