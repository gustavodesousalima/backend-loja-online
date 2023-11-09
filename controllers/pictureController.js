const Picture = require("../models/picture");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { name, ano } = req.body; 

    const file = req.file;

    const newPicture = new Picture({
      name,
      src: file.path,
      ano,
    });

    await newPicture.save();

    res.json({ picture: newPicture, msg: "Imagem salva com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens." });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada." });
    }

    fs.unlinkSync(picture.src);
    await picture.removePicture();
    res.json({ message: "Imagem removida com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir imagem:", error);
    res.status(500).json({ message: "Erro ao deletar imagem." });
  }
};