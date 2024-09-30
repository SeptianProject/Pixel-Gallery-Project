const mimeToExtension = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "image/bmp": "bmp",
  "image/tiff": "tiff",
  "image/x-icon": "ico",
};

export const getFileExtensionFromBlob = (blob) => {
  const mimeType = blob.type;
  const fileExtension = mimeToExtension[mimeType];
  return fileExtension || "";
};
