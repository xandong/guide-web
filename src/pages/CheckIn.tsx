import React, { useContext } from "react"
import { LocationContext } from "../utils/contexts/Location";
import { useNavigate } from "react-router-dom";

export const CheckIn: React.FC = () => {
  document.title = "Check In"

  const { name, setName } = useContext(LocationContext);
  const navigate = useNavigate();

  function handle(e: any) {
    setName(e.target.value)
  }

  function onSubmit(e: any) {
    e.preventDefault();

    if (name !== "") navigate("/");
  }

  return (
    <React.Fragment>
      <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center bg-blue-500 text-white">
        <h1 className="font-bold text-5xl p-2 rounded">Bem vindo(a) ao Guide</h1>
        <label className="font-medium text-xl">Selecione seu destino turístico</label>
        <form className="flex flex-col items-center gap-4"
        onSubmit={onSubmit}>
          <fieldset>
          {/* <h2>Encontre os locais que mais agradam você</h2> */}
            <select name="locales" id="locales" className="rounded p-1 text-black font-medium text-lg"
            onChange={handle}
            >
              <option value=""></option>
              <option value="Canoa Quebrada">Canoa Quebrada</option>
              <option value="Majorlandia">Majorlandia</option>
              <option value="Quixaba">Quixaba</option>
              <option value="Jericoacoara">Jericoacoara</option>
            </select>
          </fieldset>
          <button 
          type="submit"
          className="w-full py-2 font-medium border border-white hover:bg-white hover:text-blue-500 rounded transition-all">Acessar</button>
        </form>
      </div>
    </React.Fragment>
  )
}