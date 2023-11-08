const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
    ano: { type: Number, required: true },
});

// Defina o método de remoção diretamente no esquema
PictureSchema.methods.removePicture = async function () {
    await this.model("Picture").deleteOne({ _id: this._id });
};

module.exports = mongoose.model("Picture", PictureSchema);
