import acao from "../../dados/acao.json";

export default function handlerAcao(req, res) {
  res.status(200).json(acao);
}
