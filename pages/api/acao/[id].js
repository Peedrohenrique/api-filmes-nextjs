import acao from "../../dados/01-acao.json";

export default function handlerFilmes(req, res) {
  const { id } = req.query;

  const filtered = acao.filter((p) => p.id === parseInt(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
