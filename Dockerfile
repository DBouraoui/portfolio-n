FROM node:20-alpine

WORKDIR /app

COPY .output/public ./

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", ".", "-l", "3001"]
