import { useState } from "react";
function UserForm() {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    codigoPostal: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones antes de enviar los datos
    const nuevosErrores = {};
    if (!datosUsuario.nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    if (!datosUsuario.apellido) {
      nuevosErrores.apellido = "El apellido es obligatorio";
    }
    if (!datosUsuario.telefono) {
      nuevosErrores.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(datosUsuario.telefono)) {
      nuevosErrores.telefono = "El teléfono debe contener solo números";
    }
    if (!datosUsuario.codigoPostal) {
      nuevosErrores.codigoPostal = "El código postal es obligatorio";
    } else if (!/^\d+$/.test(datosUsuario.codigoPostal)) {
      nuevosErrores.codigoPostal =
        "El código postal debe contener solo números";
    }
    setErrores(nuevosErrores);

    // Si no hay errores, enviar los datos
    if (Object.keys(nuevosErrores).length === 0) {
      // Aquí puedes hacer lo que necesites con los datos ingresados por el usuario, como enviarlos a un servidor, guardarlos en el estado global, etc.
      console.log("Datos enviados:", datosUsuario);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={datosUsuario.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={datosUsuario.apellido}
          onChange={handleChange}
        />
        {errores.apellido && <span className="error">{errores.apellido}</span>}
      </div>

      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={datosUsuario.telefono}
          onChange={handleChange}
        />
        {errores.telefono && <span className="error">{errores.telefono}</span>}
      </div>

      <div>
        <label>Código Postal:</label>
        <input
          type="text"
          name="codigoPostal"
          value={datosUsuario.codigoPostal}
          onChange={handleChange}
        />
        {errores.codigoPostal && (
          <span className="error">{errores.codigoPostal}</span>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default UserForm;
