import { useForm } from "react-hook-form";
import type { TipoUsuario } from "../types/tipoUsuario";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Cadastro(){


    const navigateLogin = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<TipoUsuario>({
    mode: "onChange"
  });


  return (
    <main>
      <h1>Cadastrar usuários</h1>
    </main>
  );
}

