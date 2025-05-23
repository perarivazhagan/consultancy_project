const Brand = require("../../models/Brand");

const addBrand = async (req, res) => {
  try {
    const { name, image } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const brand = new Brand({
      name,
      image,
      slug
    });

    await brand.save();

    res.status(201).json({
      success: true,
      data: brand,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding brand",
    });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});

    res.status(200).json({
      success: true,
      data: brands,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching brands",
    });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Brand deleted successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting brand",
    });
  }
};

module.exports = { addBrand, getBrands, deleteBrand }; 