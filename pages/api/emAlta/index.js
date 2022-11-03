import emAlta from "../../dados/emAlta.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(emAlta);
}
