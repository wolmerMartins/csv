FROM node:20.5-alpine AS base

FROM base AS dependencies

WORKDIR /app

COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

RUN npm i

FROM base AS app

EXPOSE 4000

WORKDIR /app

COPY --from=dependencies /app/node_modules /app/node_modules

COPY . .

RUN mkdir -p upload

CMD [ "npm", "run", "dev" ]
