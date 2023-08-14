import "./App.css";
import logoMetro from "./assets/metro.png";
import { Formulario } from "./components/Formulario";
import Listar from "./components/Listar";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [estado, setEstado] = useState(false);
  const [idMetro, setIdmetro] = useState(0);

  const handleClearIdMetro = () => {
    setIdmetro(0);
  };
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <nav className="bg-white h-20 flex justify-around items-center dark:bg-slate-800">
        <img
          className="cursor-pointer bg-cover rounded-full dark:bg-white"
          src={logoMetro}
          alt="logo"
          width={50}
          height={50}
        />
        <ul className="flex items-center">
          <div className="cursor-pointer" onClick={toggleDarkMode}>
            <div
              className={`transition-transform duration-300 ease-in-out ${
                darkMode ? "rotate-180" : ""
              }`}
            >
              {darkMode ? (
                <FaMoon size={24} color="white" />
              ) : (
                <FaSun size={24} />
              )}
            </div>
          </div>
          <li>
            <a
              className="bg-sky-800 text-white px-6 py-2 rounded-full ml-8 hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              href="https://www.google.com.ec/?hl=es"
            >
              Salir
            </a>
          </li>
        </ul>
      </nav>

      <main className="container mx-auto flex gap-5 flex-wrap justify-center p-3 lg:flex-nowrap ">
        <div className="bg-slate-50 w-full m-3 p-5 shadow-lg rounded-lg lg:w-1/2 dark:border-2 border-sky-900">
          <div className="flex items-center space-x-10">
            <hr className="w-80 border border-gray-400" />
            <div className="sm:w-40 font-semibold text-gray-600 w-full text-center">
              Crear rutas
            </div>
            <hr className="w-80 border border-gray-400" />
          </div>
          <div className="mt-10">
            <Formulario
              setEstado={setEstado}
              idMetro={idMetro}
              handleClearIdMetro={handleClearIdMetro}
            />
          </div>
        </div>

        <div className="bg-slate-50 w-full m-3 p-5 shadow-lg rounded-lg lg:w-1/2 dark:border-2 border-sky-900">
          <div className="flex items-center space-x-10">
            <hr className="w-80 border border-gray-400" />
            <div className="sm:w-40 font-semibold text-gray-600 w-full text-center">
              Rutas creadas
            </div>
            <hr className="w-80 border border-gray-400" />
          </div>
          <div className="mt-10 h-[675px] overflow-y-auto">
            <Listar estado={estado} setIdmetro={setIdmetro} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
