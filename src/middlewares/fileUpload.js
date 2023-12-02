const multer = require("multer");
// const config = require("../config/config.json");
const path = require("path");

const imageStorage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

module.exports.imageUpload = multer({
  storage: imageStorage,
  limits: {
    fieldSize: 5248000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf|xlsx|xls|csv)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Valid Image, PDF, or Excel file"));
    }
    cb(undefined, true);
  },
});





// Create the multer upload middleware
module.exports.upload = multer({ storage: imageStorage });
