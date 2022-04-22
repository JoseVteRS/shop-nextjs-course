import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type ProductData = { message: string } | IProduct;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductData>
) {
    const { slug } = req.query;

    switch (req.method) {
        case "GET":
            return getProductBySlug(req, res);

        default:
            res.status(400).json({ message: "Method not allowed" });
    }

    res.status(200).json({ message: "Example" });
}
const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    await db.connect();
    const productBySlug = await Product.find({ slug }).lean();
    await db.disconnect();

    if (!productBySlug || productBySlug.length === 0)
        return res.status(404).json({
            message: "Not found",
        });

    return res.status(200).json(productBySlug);
};
