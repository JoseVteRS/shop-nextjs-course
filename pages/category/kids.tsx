import { Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";
import { urlWithParams } from "../../lib/url-with-params";

const KidsPage = () => {
    const { products, isLoading, isError } = useProducts(
        urlWithParams("/products", { gender: "kid" })
    );

    return (
        <ShopLayout
            title="Ropa de niños"
            pageDescription={"Nueva colección ropa de niños Teslo"}
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Productos niños
            </Typography>
            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ProductList products={products} />
            )}
        </ShopLayout>
    );
};

export default KidsPage;
