import terror from "../../dados/08-terror.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(terror);
}
