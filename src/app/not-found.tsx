import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{ py: { xs: 10, md: 16 }, textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: { xs: 72, md: 96 },
          fontWeight: 700,
          color: "primary.main",
          lineHeight: 1,
        }}>
        404
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: { xs: "22px !important", md: "28px !important" },
          mt: 2,
          mb: 1.5,
          color: "text.primary",
        }}>
        Page not found
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, color: "text.secondary", fontSize: { xs: 14, md: 16 } }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>

      <Link href="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 4,
            py: 1.2,
            color: "#ffffff",
          }}>
          Back to home
        </Button>
      </Link>
    </Container>
  );
}
