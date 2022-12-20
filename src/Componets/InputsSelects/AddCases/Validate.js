export function validate(input) {
  let errors = {};
  const expresiones = {
    //    Nombre: /^[a-zA-ZÀ-ÿ\s]{ 1,40 }$/,
    //   /^[a-zA-ZÀ-ÿ\s]{1,40}$/      Letras y espacios, pueden llevar acentos.
    celular: /^\d{1,11}$/, // 1 a 11 numeros.
  }; 

  if (input.Nombre.length < 3) {
    errors.Nombre = "Debe agregar Apellido y Nombre";
  }
  if (input.Compañia.length < 3) {
    errors.Compañia = "Debe agregar Compañía";
  }
  if (input.celular.length < 7) {
    errors.celular = "Debe contener numero de teléfono";
  }
  if (!expresiones.celular.test(input.celular)) {
    errors.celular = "debe contener solo números, entre 1 y 11 dígitos";
  }

  if (input.Patente.length < 1) {
    errors.Patente = "agregue patente por favor";
  }
  if (input.dia.length < 1) {
    errors.dia = "seleccione un día por favor";
  }
  if (input.mes.length < 1) {
    errors.mes = "seleccione un mes por favor";
  }
  if (input.año.length < 1) {
    errors.año = "seleccione un año por favor";
  }
  if (input.Marca.length < 1) {
    errors.Marca = "agregue Marca del vehículo por favor";
  }

  if (input.perito.length < 1) {
    errors.perito = "Asigne un perito por favor";
  }

  if (input.localidad.length < 1) {
    errors.localidad = "seleccione una localidad por favor";
  }

  if (input.direccion.length < 1) {
    errors.direccion = "Agregue dirección por favor";
  }

  return errors;
}
