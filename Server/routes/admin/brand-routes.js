const express = require("express");
const { addBrand, getBrands, deleteBrand } = require("../../controllers/admin/brand-controller");

const router = express.Router();

router.post("/add", addBrand);
router.get("/get", getBrands);
router.delete("/delete/:id", deleteBrand);

module.exports = router; 