import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from "@/components/shared/ProductCard";
import { getFeaturedProducts } from "@/services/products";

export default async function FeaturedProducts() {
  const { products } = await getFeaturedProducts();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: {
            xs: "26px !important",
            sm: "28px !important",
            md: "32px !important",
          },
          mb: 0.5,
          color: "text.primary",
        }}>
        Featured products
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 4, md: 6 },
          color: "text.secondary",
          fontSize: { xs: 14, sm: 15, md: 16 },
          fontWeight: 400,
        }}>
        What&apos;s more, we do it right!
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
