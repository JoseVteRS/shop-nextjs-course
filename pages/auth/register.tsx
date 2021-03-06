import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { AuthLayout } from "../../components/layout";

const RegisterPage = () => {
  return (
    <AuthLayout title={"Registro"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Crear una cuenta
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="Nombre completo" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Correo electronico" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button color="secondary" className="circular-btn" size="large">
              Registrarse
            </Button>
          </Grid>

          <Grid item xs={12}>
            <NextLink href="/auth/login" passHref>
              <Link underline="always">
                ¿Ya tienes cuenta? Iniciar sesión aquí
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
