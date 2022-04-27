import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UiContext } from "../../context";

export const Navbar = () => {
    const { toggleSideMenu } = useContext(UiContext);
    const { asPath } = useRouter();

    return (
        <AppBar>
            <Toolbar>
                <NextLink href={"/"} passHref>
                    <Link display="flex" alignItems="center">
                        <Typography variant="h6">Testo |</Typography>
                        <Typography sx={{ ml: "6px" }}>Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <NextLink href="/category/men" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/men"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Hombres
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/women"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Mujeres
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kids" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/kids"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Niños
                            </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button color="info" onClick={toggleSideMenu}>
                    Menú
                </Button>
            </Toolbar>
        </AppBar>
    );
};
