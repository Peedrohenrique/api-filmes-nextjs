import crime from "../../dados/07-crime.json";

export default function handlerFilmes(req, res) {
  res.status(200).json(crime);
}
