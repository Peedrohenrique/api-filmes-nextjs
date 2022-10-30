import animacao from "../../dados/05-animacao.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(animacao);
}
