import documentario from "../../dados/03-documentario.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(documentario);
}
