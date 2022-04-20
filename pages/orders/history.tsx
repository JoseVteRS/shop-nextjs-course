import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from "next/link";
import { ShopLayout } from "../../components/layout";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra información si está pagado el pedido o no",
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagado" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagado" variant="outlined" />
      );
    },
    width: 250,
  },
  {
    field: "pedido",
    headerName: "Ver pedido",
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver pedido</Link>
        </NextLink>
      );
    },
    width: 250,
    sortable: false,
  },
];

const rows = [
  { id: 1, paid: false, fullname: "Fernando Herrera" },
  { id: 2, paid: true, fullname: "Jose Vte" },
  { id: 3, paid: false, fullname: "Lucia Soriano Solanes" },
  { id: 4, paid: false, fullname: "Victor Soriano Solanes" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de pedidos"
      pageDescription="Historial de pedidos del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial pedidos
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          ></DataGrid>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
