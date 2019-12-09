import fs from "fs";
import formidable from "formidable";
import Shop from "../models/shop.model";
import errorHandler from "../helpers/dbErrorHandler";
import _ from "lodash";

const create = (req, res, next) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      });
    }

    let shop = new Shop(fields);
    shop.owner = req.profile;
    if (files.image) {
      shop.image.data = fs.readFileSync(files.image.path);
      shop.image.contentType = files.image.type;
    }

    shop.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }

      res.status(200).json(result);
    });
  });
};

const list = (req, res) => {
  Shop.find((err, shops) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    res.status(200).json(shops);
  });
};

const listByOwner = (req, res) => {
  Shop.find({ owner: req.profile._id }, (err, shops) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }

    res.status(200).json(shops);
  }).populate("owner", "_id name");
};

const read = (req, res) => {
  return res.json(req.shop);
};

const shopByID = (req, res, next, id) => {
  Shop.findById(id)
    .populate("owner", "_id name")
    .exec((err, shop) => {
      if (err || !shop) {
        return res.status(404).json({
          error: "Shop not found"
        });
      }

      req.shop = shop;
      next();
    });
};

const update = (req, res, next) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      });
    }
    let shop = req.shop;
    shop = _.extend(shop, fields);
    shop.updated = Date.now();
    if (files.image) {
      shop.image.data = fs.readFileSync(files.image.path);
      shop.image.contentType = files.image.type;
    }
    shop.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.json(shop);
    });
  });
};

const isOwner = (req, res, next) => {
  const isOwner = req.shop && req.auth && req.shop.owner._id == req.auth._id;
  if (!isOwner) {
    res.status(403).json({
      error: "User is not authorized"
    });
  }
  next();
};

export default {
  create,
  list,
  listByOwner,
  read,
  shopByID,
  isOwner,
  update
};
