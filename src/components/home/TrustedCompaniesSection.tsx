import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import companyLogos from "@/constants/companyLogos";

export default function TrustedCompaniesSection() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 4, md: 2 }, overflow: "hidden", bgcolor: "#fff" }}>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          minHeight: { xs: "400px", md: "450px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Stack
          spacing={1.5}
          sx={{
            position: "relative",
            zIndex: 10,
            maxWidth: "500px",
            px: 2,
            alignItems: "center",
            textAlign: "center",
          }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 20, sm: 24, md: 32 },
              lineHeight: 1.2,
              color: "text.primary",
            }}>
            Join the 7,000+ <br /> companies trusting us
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: 16, md: 17 },
              fontWeight: 400,
            }}>
            You&apos;ve got the ideas, we&apos;ve got the tools
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "primary",
              color: "#fff",
              borderRadius: "12px",
              textTransform: "none",
              px: 4,
              py: 1.2,
              boxShadow: "none",
            }}>
            Get Started
          </Button>
        </Stack>

        {companyLogos.map((logo) => (
          <Box
            key={logo.id}
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "white",
              borderRadius: "50%",
              boxShadow: "0px 24px 50px 0px #0000001A",
              height: logo.sx.width,
              p: 0,
              zIndex: 1,
              ...logo.sx,
            }}>
            <Box
              sx={{
                position: "relative",
                width: logo.logoSize || "80%",
                height: logo.logoSize || "80%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
