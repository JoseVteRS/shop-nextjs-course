import {
    ClearOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Input,
    InputAdornment,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context";

export const Navbar = () => {
    const { toggleSideMenu } = useContext(UiContext);
    const { asPath, push } = useRouter();

    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`);
    };

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

                <Box
                    sx={{
                        display: isSearchVisible
                            ? "none"
                            : { xs: "none", sm: "block" },
                    }}
                    className="fadeIn"
                >
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

                {/* Pantallas grandes */}

                {isSearchVisible ? (
                    <Input
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        className="fadeIn"
                        value={searchTerm}
                        onChange={(ev) => setSearchTerm(ev.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" ? onSearchTerm() : null
                        }
                        type="text"
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={() => {}}>
                                    <ClearOutlined
                                        onClick={() =>
                                            setIsSearchVisible(false)
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                ) : (
                    <IconButton
                        className="fadeIn"
                        onClick={() => setIsSearchVisible(true)}
                        sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                        <SearchOutlined />
                    </IconButton>
                )}

                {/* Pantallas pequeñas */}
                <IconButton
                    sx={{ display: { xs: "flex", sm: "none" } }}
                    onClick={toggleSideMenu}
                >
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
