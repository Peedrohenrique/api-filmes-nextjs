import banner from "../../dados/banner.json";

export default function handlerBanner(req, res) {
  const { id } = req.query;

  const filtered = banner.filter((p) => p.id === parseInt(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
