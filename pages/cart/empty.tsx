import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { ShopLayout } from "../../components/layout";

const EmpyCartPage = () => {
  return (
    <ShopLayout
      title="Carrito vacio"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography> Su carrito está vacio</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Volver
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmpyCartPage;
