"use client";
import {NavBar, Sai, Repositorios} from "../components"


// fetch(""url).then(response=>response.json()).then(data=>console.log(data)
export default function pageUsuarios() {
  return (
      <div className="bg-black relative">
        <NavBar/>
        <Sai/>
        <Repositorios/>
      </div>
  );
}
