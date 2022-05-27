FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build


FROM node:latest
WORKDIR /app
COPY ./server.js .
RUN npm install express
COPY --from=builder /app/dist/ /app/dist
ENTRYPOINT [ "node", "./server.js" ]