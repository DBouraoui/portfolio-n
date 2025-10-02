# Stage 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx nuxi build  # build SSR ou SPA selon ta config

# Stage 2 : production
FROM node:20-alpine AS production
WORKDIR /app

COPY --from=builder /app/.output/public ./public
RUN npm install -g serve

EXPOSE 3001
CMD ["serve", "-s", "public", "-l", "3001"]
