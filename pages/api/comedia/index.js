import comedia from "../../dados/02-comedia.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(comedia);
}
