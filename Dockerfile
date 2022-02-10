FROM node:alpine as builder
COPY . .
RUN npm install
RUN npm run build:app

FROM node:alpine

RUN apk add --no-cache curl

COPY --from=builder dist/* dist/
COPY package.json .
COPY package-lock.json .
RUN npm install --production


HEALTHCHECK --interval=1s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/status || exit 1
CMD ["node", "dist/main.js"]
