import fs from "fs";
import formidable from "formidable";
import Shop from "../models/shop.model";
import errorHandler from "../helpers/dbErrorHandler";

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

export default {
  create,
  list,
  listByOwner,
  read,
  shopByID
};
