import banner from "../../dados/banner.json";

export default function handlerBanner(req, res) {
  res.status(200).json(banner);
}
