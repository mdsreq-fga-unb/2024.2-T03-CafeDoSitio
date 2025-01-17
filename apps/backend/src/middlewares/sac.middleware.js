import multer from "multer";
import path from "path";

// Configurando o armazenamento do arquivo
const storage = multer.diskStorage({
  destination: "uploads/", // Pasta onde os arquivos serão armazenados
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Pega a extensão original do arquivo
    const name = path.basename(file.originalname, ext); // Pega o nome do arquivo sem a extensão
    cb(null, `${name}-${Date.now()}${ext}`); // Gera um nome único para evitar sobrescrita
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 15 * 1024 * 1024 // 15MB em bytes
  }
});

export default upload;
