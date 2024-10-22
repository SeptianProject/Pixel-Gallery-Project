import React, { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "./SetCanvasPreview";

const CROP_PRESETS = {
  profile: {
    aspect: 1,
    minDimension: 150,
    width: 150,
    height: 150,
    circular: true,
    label: "Profile Photo",
  },
  cover: {
    aspect: 16 / 9,
    minDimension: 300,
    width: 1200,
    height: 675,
    circular: false,
    label: "Cover Image",
  },
  // Bisa menambahkan preset lain sesuai kebutuhan
  square: {
    aspect: 1,
    minDimension: 200,
    width: 200,
    height: 200,
    circular: false,
    label: "Square Image",
  },
};

const ImageCropper = ({
  setSelectedImage,
  updateImage,
  closeModal,
  cropPreset = "profile",
}) => {
  const imgRef = useRef();
  const previewCanvasRef = useRef();
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");

  const currentPreset = CROP_PRESETS[cropPreset];

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (
          naturalWidth < currentPreset.minDimension ||
          naturalHeight < currentPreset.minDimension
        ) {
          setError(
            `Image must be at least ${currentPreset.minDimension}px in both dimension.    `
          );
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (currentPreset.minDimension / width) * 100;
    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      currentPreset.aspect,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      <label className="block mb-3 w-fit">
        <span className="sr-only">Choose {currentPreset.label}</span>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
        />
      </label>
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {imgSrc && (
        <div className="flex flex-col items-center">
          <ReactCrop
            crop={crop}
            onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            circularCrop={currentPreset.circular}
            keepSelection
            aspect={currentPreset.aspect}
            minWidth={currentPreset.minDimension}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              alt="Upload"
              style={{ maxHeight: "70vh" }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          <button
            className="text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
            onClick={() => {
              setCanvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(
                  crop,
                  imgRef.current.width,
                  imgRef.current.height
                )
              );
              previewCanvasRef.current.toBlob((blob) => {
                setSelectedImage(blob);
              });
              const dataUrl = previewCanvasRef.current.toDataURL();
              updateImage(dataUrl);
              closeModal();
            }}
          >
            Crop Image
          </button>
        </div>
      )}
      {crop && (
        <canvas
          ref={previewCanvasRef}
          className="mt-4"
          style={{
            display: "none",
            border: "1px solid black",
            objectFit: "contain",
            width: currentPreset.width,
            height: currentPreset.height,
          }}
        />
      )}
    </>
  );
};

export default ImageCropper;
