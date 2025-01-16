FROM node:20-alpine AS base

RUN apk update && apk add bash && apk add openssl
RUN corepack enable
RUN corepack prepare pnpm@9.15.2 --activate

WORKDIR /app

# ...

FROM base AS builder
COPY . .
RUN pnpm install
RUN pnpm build


FROM builder as runner

EXPOSE 3000
CMD ["pnpm", "run", "start"]
