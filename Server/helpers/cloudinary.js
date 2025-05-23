const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

// Validate Cloudinary configuration
if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET) {
  console.error("Missing Cloudinary configuration. Please check your .env file.");
  throw new Error("Cloudinary configuration is incomplete");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  try {
    console.log("Starting Cloudinary upload...");
    
    if (!file) {
      throw new Error("No file provided for upload");
    }

    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      folder: "furniture-store", // Optional: organize uploads in a folder
    });

    if (!result || !result.url) {
      throw new Error("Cloudinary upload failed - no URL returned");
    }

    console.log("Cloudinary upload successful:", result.url);
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", {
      message: error.message,
      stack: error.stack,
      error: error
    });
    throw error;
  }
}

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

module.exports = { upload, imageUploadUtil };
