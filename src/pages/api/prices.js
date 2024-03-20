import { prices } from "./data/prices";

export default function handler(req, res) {
  res.status(200).json({ prices });
}
