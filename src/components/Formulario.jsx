import Mensajes from "./Mensajes";
import { useEffect,useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formulario = ({ setEstado, idMetro }) => {
 
  const [initialValues, setInitialValues] = useState({
    nombre: "",
    sector: "",
    salida: "",
    llegada: "",
    maquinista: "",
    detalles: "",
    id: 0,
  });

  useEffect(() => {
    console.log(idMetro)
    if (idMetro ) {
      (async function fetchData() {
        try {
          const respuesta = await (
            await fetch(`http://localhost:3000/metro/${idMetro}`)
          ).json();
          setInitialValues(respuesta)
          
        } catch (error) {
          console.log(error);
        }
      })();
    }
    else{
      setInitialValues({
        nombre: "",
        sector: "",
        salida: "",
        llegada: "",
        maquinista: "",
        detalles: "",
        id: 0,
      });
    }
  }, [idMetro]);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validate={(data) => {
        let error = {};

        if (!data.nombre) {
          error.nombre = "Ingresa un nombre de la ruta";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.nombre)) {
          error.nombre =
            "El nombre de la ruta solo puede contener letras y espacios";
        }
        if (!data.sector) {
          error.sector = "Ingresa la ruta";
        }

        if (!data.salida) {
          error.salida = "Ingresa el punto de salida";
        }
        if (!data.llegada) {
          error.llegada = "Ingresa el punto de llegada";
        }
        if (!data.maquinista) {
          error.maquinista = "Ingresa el nombre del maquinista";
        }
        return error;
      }}
      
      onSubmit={async (data, { resetForm }) => {
        try {
          if (data.id) {
            const url = `http://localhost:3000/metro/${data.id}`;
            await fetch(url, {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            });
            setEstado(true);
            setTimeout(() => {
              setEstado(false);
              setInitialValues({
                nombre: "",
                sector: "",
                salida: "",
                llegada: "",
                maquinista: "",
                detalles: "",
                id: 0,
              });
            }, 1000);

            
            Swal.fire({
              position: "center",
              icon: "success",
              title: "La ruta a se actualizado",
              showConfirmButton: false,
              timer: 2000,
            });
            
            
            
          } else {
            const url = "http://localhost:3000/metro";
            data.id = uuidv4();

            await fetch(url, {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            
            Swal.fire({
              position: "center",
              icon: "success",
              title: "La ruta a se a creado con exito",
              showConfirmButton: false,
              timer: 2000,
            });

            setEstado(true);
            setTimeout(() => {
              resetForm();
              setEstado(false);
            }, 1000);
          }
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ errors, values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <label
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Nombre:{""}
            </label>

            <Field
              id="nombre"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              placeholder="Nombre de la ruta"
              name="nombre"
            />

            <ErrorMessage
              name="nombre"
              component={() => (
                <Mensajes tipo="text-red-500">{errors.nombre}</Mensajes>
              )}
            />
          </div>

          <div>
            <label
              htmlFor="sector"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Sector:{" "}
            </label>
            <Field
              id="sector"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              placeholder="Sector de la ruta"
              name="sector"
            />
            <ErrorMessage
              name="sector"
              component={() => (
                <Mensajes tipo="text-red-500">{errors.sector}</Mensajes>
              )}
            />
          </div>

          <div>
            <label
              htmlFor="salida"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Punto de salida:{" "}
            </label>
            <Field
              id="salida"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              placeholder="Punto de salida"
              name="salida"
            />

            <ErrorMessage
              name="salida"
              component={() => (
                <Mensajes tipo="text-red-500">{errors.salida}</Mensajes>
              )}
            />
          </div>

          <div>
            <label
              htmlFor="llegada"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Punto de llegada:{" "}
            </label>
            <Field
              id="llegada"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              placeholder="Punto de llegada"
              name="llegada"
            />

            <ErrorMessage
              name="llegada"
              component={() => (
                <Mensajes tipo="text-red-500">{errors.llegada}</Mensajes>
              )}
            />
          </div>

          <div>
            <label
              htmlFor="maquinista"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Nombre del maquinista:{" "}
            </label>
            <Field
              id="maquinista"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              placeholder="Nombre del maquinista"
              name="maquinista"
            />

            <ErrorMessage
              name="maquinista"
              component={() => (
                <Mensajes tipo="text-red-500">{errors.maquinista}</Mensajes>
              )}
            />
          </div>
          <div>
            <label
              htmlFor="detalles"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Detalles:{" "}
            </label>
            <textarea
              id="detalles"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-2"
              name="detalles"
              value={values.detalles}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <input
            type="submit"
            className="bg-sky-900 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-red-900 cursor-pointer transition-all"
            value={values.id ? "Actualizar ruta" : "Registrar ruta"}
          />
          
        </Form>
      )}
    </Formik>
  );
};
