import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";
import { initialData } from "../../database/products";
import { ItemCounter } from "../ui";

interface CartListProps {
  editable?: boolean;
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList: FC<CartListProps> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => {
        return (
          <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/* TODO llevar a la página del producto */}
              <NextLink href="/product/slug" passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      sx={{ borderRadius: "5px" }}
                      component="img"
                      image={`/products/${product.images[0]}`}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body1">
                  Talla: <strong>M</strong>
                </Typography>
                {/* Condicional */}

                {editable ? <ItemCounter /> : <Typography>3</Typography>}
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="body1"> ${product.price} </Typography>

              {/* editable */}

              {editable && (
                <Button variant="text" color="secondary">
                  Borrar
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
