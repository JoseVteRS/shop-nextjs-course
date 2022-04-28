import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}

const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {
    return (
        <ShopLayout
            title="Teslo Shop - Home"
            pageDescription={"Encuentra los mejores productos"}
        >
            <Typography variant="h1" component="h1">
                Buscar producto
            </Typography>
            {foundProducts ? (
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{ mb: 1 }}
                    textTransform="capitalize"
                >
                    Término de búsqueda:
                    <span style={{ color: "royalblue", fontWeight: "bold" }}>
                        {query}
                    </span>
                </Typography>
            ) : (
                <Box display="flex" ml={1}>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                        No encontramos ningún producto
                    </Typography>
                    <Typography variant="h2" sx={{ ml: 1 }} color="secondary">
                        {query}
                    </Typography>
                </Box>
            )}

            <ProductList products={products} />
        </ShopLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = "" } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    }

    let products = await dbProducts.getProductsByTerm(query);
    const foundProducts = products.length > 0;

    // TODO: retornar otros productos
    if (!foundProducts) {
        // products = await dbProducts.getAllProducts();
        products = await dbProducts.getProductsByTerm("cybertruck");
    }

    return {
        props: {
            products,
            foundProducts,
            query,
        },
    };
};

export default SearchPage;
