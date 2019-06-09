FROM node:10
ENV IP react-mongo
ENV MONGO_PORT 27017
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "production"]