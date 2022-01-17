import { searchCar } from "../../lib/redis";

export default async function handler(req, res) {
  const q = req.query.q
  const cars = await searchCar(q);
  res.status(200).json({ cars });
}
