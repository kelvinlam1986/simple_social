const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || process.env.NODE_PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "kelvinlam1986",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject"
};

//mongodb + srv://admin:<password>@cluster0-jla9f.mongodb.net/test?retryWrites=true&w=majority

export default config;
