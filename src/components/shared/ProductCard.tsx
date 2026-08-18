import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <Card elevation={0} sx={{ borderRadius: "12Px" }}>
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
              mb: 1,
            }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 2, textTransform: "none" }}>
            View Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
