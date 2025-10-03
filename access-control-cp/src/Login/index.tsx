import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoUsuario } from "../types/tipoUsuario";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;


export default function Login(){
    const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<TipoUsuario>({
    mode: "onChange"
  });

  const onSubmit = handleSubmit(async (data: TipoUsuario) => {
    try {

      const res = await fetch(API_URL);
      const usuarios: TipoUsuario[] = await res.json();


      const usuarioValido = usuarios.find(
        (u) =>
          u.nomeUsuario.toLowerCase() === data.nomeUsuario.toLowerCase() && u.email.toLowerCase() === data.email.toLowerCase()
      );

      if (!usuarioValido) {
        alert("Usuário não cadastrado!");
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
      alert(`Bem-vindo ${usuarioValido.nomeUsuario}`);


    } catch (error) {
      console.error(error);
      alert("Erro ao autenticar usuário.");
    }
  });

  const handleLogout = ()=>{
    localStorage.removeItem("usuarioLogado")
    window.location.reload();
  };

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null")

  return(

  );
}