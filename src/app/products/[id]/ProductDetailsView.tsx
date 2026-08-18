"use client";

import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { hydrateProduct } from "@/redux/slices/productDetailsSlice";
import { colors } from "@/theme/colors";
import type { Product } from "@/types/product";

export default function ProductDetailsView({
  initialProduct,
}: {
  initialProduct: Product;
}) {
  const dispatch = useAppDispatch();
  const storeProduct = useAppSelector((state) => state.productDetails.product);
  const product =
    storeProduct?.id === initialProduct.id ? storeProduct : initialProduct;

  useEffect(() => {
    dispatch(hydrateProduct(initialProduct));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProduct.id]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
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
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
            <Chip
              label={product.brand}
              size="small"
              sx={{
                bgcolor: colors.linkBackground,
                color: "primary.main",
                fontWeight: 600,
              }}
            />
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "26px !important",
                sm: "28px !important",
                md: "32px !important",
              },
              textAlign: "left",
              mb: 1.5,
              color: "text.primary",
            }}>
            {product.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
              {product.rating.toFixed(1)}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 700,
              color: "primary.main",
              mb: 3,
              textAlign: "left",
            }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography
            sx={{
              fontSize: 15,
              lineHeight: "26px",
              color: "text.secondary",
              textAlign: "left",
              fontWeight: 400,
            }}>
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
