FROM node:16
WORKDIR /app
COPY server .
#COPY server/package.json server/package-lock.json
RUN npm install
ENTRYPOINT npm run start
