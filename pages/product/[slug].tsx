import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { ShopLayout } from "../../components/layout";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct, ISize } from "../../interfaces";
import { ICartProduct } from "../../interfaces/cart";

interface Props {
    product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        slug: product.slug,
        size: undefined,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    });

    const selectedSize = (size: ISize) => {
        setTempCartProduct((currentProduct) => ({
            ...currentProduct,
            size,
        }));
    };

    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h1" component="h1">
                            {product.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            ${product.price}
                        </Typography>

                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">
                                Cantidad
                            </Typography>

                            <ItemCounter />
                            <SizeSelector
                                sizes={product.sizes}
                                selectedSize={tempCartProduct.size}
                                onSelectedSize={selectedSize}
                            />
                        </Box>

                        {/* Add to cart */}
                        {product.inStock > 0 ? (
                            <Button color="secondary" className="circular-btn">
                                {tempCartProduct.size
                                    ? "Añadir al carrito"
                                    : "Selecciona una talla"}
                            </Button>
                        ) : (
                            <Chip
                                label="No hay disponibles"
                                color="error"
                                variant="outlined"
                            />
                        )}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">
                                Descipción
                            </Typography>
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const productsSlugs = await dbProducts.getAllProductsSlugs();

    return {
        paths: productsSlugs.map(({ slug }) => {
            return {
                params: { slug },
            };
        }),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = "" } = params as { slug: string };

    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { product },
        revalidate: 60 * 60 * 24,
    };
};

export default ProductPage;
