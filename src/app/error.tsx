"use client";

import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 8 }, textAlign: "center" }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: { xs: "22px !important", md: "28px !important" },
          mb: 1.5,
          color: "text.primary",
        }}>
        Something went wrong
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, color: "text.secondary", fontSize: { xs: 6, md: 8 } }}>
        We couldn&apos;t load this page. Please try again.
      </Typography>

      <Button
        variant="contained"
        onClick={reset}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          px: 4,
          py: 1.2,
          color: "#ffffff",
        }}>
        Try again
      </Button>
    </Container>
  );
}
