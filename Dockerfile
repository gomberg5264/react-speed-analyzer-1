# build environment
# FROM node:9.6.1 as builder
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY . /usr/src/app
# RUN npm install
# RUN npm run build

# production environment
# FROM nginx:1.13.9-alpine
# RUN rm -rf /etc/nginx/conf.d
# RUN mkdir -p /etc/nginx/conf.d
# COPY ./default.conf /etc/nginx/conf.d/
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
CMD [ "npm", "start", "serve" ]
