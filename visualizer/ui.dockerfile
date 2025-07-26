FROM node:20-alpine

ENV NODE_ENV=production

RUN npm install -g pnpm

WORKDIR /app

COPY ./ui /app

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]
