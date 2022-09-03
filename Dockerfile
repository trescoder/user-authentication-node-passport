FROM node:16.15-alpine3.14
RUN mkdir -p /home/app
WORKDIR /home/app
RUN adduser -S admin
COPY . .
RUN npm install
USER root
EXPOSE 3000
CMD [ "npm", "start"]