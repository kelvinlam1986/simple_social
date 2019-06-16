FROM node:10 as build
WORKDIR /usr/src/app
COPY .babelrc ./
COPY package*.json ./
COPY webpack.config.client.production.js ./
COPY webpack.config.client.js ./
COPY webpack.config.server.production.js ./
COPY template.js ./
COPY template.html ./
COPY nodemon.json ./
COPY client client
COPY server server
COPY config config
COPY client/assets/images/favicon.ico client/assets/images/favicon.ico

RUN npm install
ENV NODE_ENV production
RUN npm run build

FROM node:10
ENV NODE_ENV production
ENV IP react-mongo
ENV MONGO_PORT 27017

WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/dist dist
# RUN npm install core-util-is
RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "run", "start"]