import fs from "fs";
import formidable from "formidable";
import Shop from "../models/shop.model"
import errorHandler from "../helpers/dbErrorHandler";

const create = (req, res, next) => {
    let form = formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                message: "Image could not be uploaded"
            })
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
                })
            }

            res.status(200).json(result);
        })
    });
};

export default {
    create
};