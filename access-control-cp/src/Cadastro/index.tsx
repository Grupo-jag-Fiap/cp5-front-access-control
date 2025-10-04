import { useForm } from "react-hook-form";
import type { TipoUsuario } from "../types/tipoUsuario";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Cadastro(){

  const navigateLogin = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<TipoUsuario>({
    mode: "onChange"
  });

  const onSubmit = handleSubmit(async (data: TipoUsuario) => {
    try {
      const res = await fetch(API_URL);
      const usuarios: TipoUsuario[] = await res.json();

      const usuarioJaExiste = usuarios.filter(
        (u) =>
          u.nomeUsuario.toLowerCase() === data.nomeUsuario.toLowerCase() &&
          u.email.toLowerCase() === data.email.toLowerCase()
      );

      if (usuarioJaExiste) {
        alert("Usuário já cadastrado");
        return;
      }

      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Usuário cadastrado com sucesso!");
      navigateLogin("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar.");
    }
  });

  return (
    <main>
      <h1>Cadastrar usuários</h1>
    </main>
  );
}

