import { NextApiRequest, NextApiResponse } from "next";
import acao from "../../dados/acao.json";

export default function handlerAcao(req, res) {
  const { id } = req.query;

  const filtered = acao.filter((p) => p.id === parseInt(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}

// //Pegar apenas um filme do Array!
// getFindOne(id) {
//     const filme = filmesDeAcao.find((film) => film.id === parseInt(id));
//     return filme;
//   },
