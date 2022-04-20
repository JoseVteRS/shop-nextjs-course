import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDataBase } from "../../database";
import { Product } from "../../models";

type Data = {
  message: string;
};

export default async function nadler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production")
    res.status(403).json({ message: "No tiene accesso a este API" });

  await db.connect();
  await Product.deleteMany();

  await Product.insertMany(seedDataBase.initialData.products);

  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
