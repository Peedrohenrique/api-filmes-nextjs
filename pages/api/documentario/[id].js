import documentario from "../../dados/03-documentario.json";

export default function handlerFilmes(req, res) {
  const { id } = req.query;

  const filtered = documentario.filter((p) => p.id === parseInt(id));

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
