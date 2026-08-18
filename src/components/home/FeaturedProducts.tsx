import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
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
            <Link
              href={`/products/${product.id}`}
              style={{ textDecoration: "none" }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "12px",
                }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    bgcolor: "grey.100",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 600px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <CardContent sx={{ px: 0.5 }}>
                  <Typography
                    noWrap
                    sx={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "text.primary",
                    }}>
                    {product.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "text.primary",
                    }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
