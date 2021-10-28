module.exports = mongoose => {
    const Usuario = mongoose.model(
      "usuarios",
      mongoose.Schema(
        {
          nombre: String,
          apellidos: String,
          pais: String,
          telf: Number,
          pack: String,
         
        },
        { timestamps: true }
      )
    );
    return Usuario;
  };