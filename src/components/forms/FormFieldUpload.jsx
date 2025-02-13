import { CloudDownload } from "lucide-react";
import Modal from "../modal/Modal";
import { useRef } from "react";

const FormFieldUpload = ({
  image,
  setSelectedImage,
  modalopen,
  setModalOpen,
}) => {
  const coverUrl = useRef(image);
  const updateCover = (imgSrc) => {
    coverUrl.current = imgSrc;
  };
  return (
    <div className="mt-10 flex flex-col gap-2">
      <label htmlFor="" className="text-dark opacity-75 font-bold text-lg">
        Image/Cover
      </label>
      <div className="flex flex-col gap-1 py-16 items-center border border-hijau rounded-3xl">
        <div>
          <img src={coverUrl.current} alt="" />
        </div>
        <button type="button" onClick={() => setModalOpen(true)}>
          <CloudDownload
            className="w-full text-dark opacity-50 items-center"
            strokeWidth={1}
            size={70}
          />
          <p className="w-full text-gray-500 text-center mx-auto">
            Upload your image from your device
          </p>
        </button>
        {modalopen && (
          <Modal
            setSelectedImage={setSelectedImage}
            updateImage={updateCover}
            closeModal={() => setModalOpen(false)}
            cropPreset={"cover"}
          />
        )}
        {/* <input
          type="text"
          placeholder="Upload your image from your device"
          className="w-full text-center mx-auto"
        /> */}
      </div>
    </div>
  );
};

export default FormFieldUpload;
