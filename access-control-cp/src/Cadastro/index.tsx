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

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
  };

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");


  return (
    <main>
      <h1>Cadastrar usuários</h1>
      <div className="text-center bg-amber-100">
        {usuario ? (
          <div className="usuario-logado">
            <p className="bemvindo">Bem-vindo, {usuario.nome}</p>
            <button onClick={handleLogout} className="logout-btn">Sair</button>
          </div>
        ) : (
          <p className="text-gray-700 font-medium mb-4">Bem-vindo visitante</p>
        )}
      </div>
    </main>
  );
}
