import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Erro</h1>
      <p className="text-gray-700 text-lg mb-6">Algo deu errado. Tente novamente mais tarde.</p>
      <Link to="/" className="bg-red-600 text-white px-5 py-2 rounded-lg">Voltar para a Home</Link>
    </div>
  );
}