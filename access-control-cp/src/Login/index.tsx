import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoUsuario } from "../types/tipoUsuario";

const API_URL = import.meta.env.VITE_API_URL_USUARIOS;


export default function Login(){
    const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<TipoUsuario>({
    mode: "onChange"
  });
}