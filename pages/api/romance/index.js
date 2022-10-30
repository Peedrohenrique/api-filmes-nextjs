import romance from "../../dados/04-romance.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(romance);
}
