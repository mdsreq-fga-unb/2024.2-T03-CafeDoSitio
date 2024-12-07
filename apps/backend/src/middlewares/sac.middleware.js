import multer from "multer";

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 15 * 1024 * 1024 // 15MB em bytes
  }
});

export default upload;