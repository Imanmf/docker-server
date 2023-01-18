FROM node:16.19.0-buster-slim
WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server .
ENTRYPOINT npm run start
