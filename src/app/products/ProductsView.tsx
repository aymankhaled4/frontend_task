"use client";

import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchProducts,
  hydrateProducts,
  setCurrentPage,
} from "@/redux/slices/productsSlice";
import ProductCard from "@/components/shared/ProductCard";
import type { ProductsResponse } from "@/types/product";

const LIMIT = 10;

export default function ProductsView({
  initialData,
}: {
  initialData: ProductsResponse;
}) {
  const dispatch = useAppDispatch();
  const { itemsByPage, currentPage, total, loading, error } = useAppSelector(
    (state) => state.products,
  );
  const [targetPage, setTargetPage] = useState(currentPage);

  useEffect(() => {
    if (!itemsByPage[1]) {
      dispatch(
        hydrateProducts({
          page: 1,
          products: initialData.products,
          total: initialData.total,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const products = itemsByPage[currentPage] ?? initialData.products;
  const pageCount = Math.ceil((total || initialData.total) / LIMIT);

  const goToPage = (page: number) => {
    setTargetPage(page);
    if (itemsByPage[page]) {
      dispatch(setCurrentPage(page));
    } else {
      dispatch(fetchProducts(page));
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    (event.target as HTMLElement)?.blur();
    goToPage(page);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {error && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => goToPage(targetPage)}>
              Retry
            </Button>
          }
          sx={{ mb: 4 }}>
          Couldn&apos;t load page {targetPage}. {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          disabled={loading}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              color: "#ffffff",
            },
          }}
        />
      </Box>
    </Container>
  );
}
