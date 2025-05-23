import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addBrand, deleteBrand, getBrands } from "@/store/admin/brands-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { brandOptionsMap } from "@/config";

function AdminBrands() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const dispatch = useDispatch();
  const { brandList } = useSelector((state) => state.brands);

  function handleUploadBrandImage() {
    if (!selectedBrand) {
      return;
    }
    dispatch(addBrand({ name: selectedBrand, image: uploadedImageUrl })).then((data) => {
      if (data?.payload?.success) {
        dispatch(getBrands());
        setImageFile(null);
        setUploadedImageUrl("");
        setSelectedBrand("");
      }
    });
  }

  function handleDeleteBrand(id) {
    dispatch(deleteBrand(id)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getBrands());
      }
    });
  }

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div>
      <div className="mb-4">
        <Label className="text-lg font-semibold mb-2 block">Select Brand</Label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select a brand</option>
          {Object.entries(brandOptionsMap).map(([id, label]) => (
            <option key={id} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      />
      <Button 
        onClick={handleUploadBrandImage} 
        className="mt-5 w-full"
        disabled={!selectedBrand || !uploadedImageUrl}
      >
        Upload Brand Image
      </Button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {brandList && brandList.length > 0
          ? brandList.map((brand) => (
              <div key={brand._id} className="relative group">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-[200px] object-contain rounded-lg bg-gray-50 p-4"
                />
                <div className="mt-2 text-center font-medium">{brand.name}</div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDeleteBrand(brand._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default AdminBrands; 