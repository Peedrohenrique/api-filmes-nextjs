import acao from "../../dados/01-acao.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(acao);
}
