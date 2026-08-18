import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import laptopMockup from "@/assets/images/CTA.png";
import SmallCircle from "@/assets/icons/small-circle-cta.svg";
import BigCircle from "@/assets/icons/big-circle-cta.svg";
import { colors } from "@/theme/colors";

export default function CTA() {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            bgcolor: colors.sectionBackground,
            borderRadius: "12px",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "380px" },
            pb: { xs: 6, md: 0 },
          }}>
          <Box
            component="img"
            src={BigCircle?.src || BigCircle}
            alt="Big Circle"
            sx={{
              position: "absolute",
              left: { xs: "-35%", md: "0%" },
              bottom: { xs: "-15%", md: "-32%" },
              width: { xs: "200px", md: "350px" },
              zIndex: 0,
            }}
          />

          <Box
            component="img"
            src={SmallCircle?.src || SmallCircle}
            alt="Small Circle"
            sx={{
              position: "absolute",
              left: { xs: "80%", md: "43%" },
              bottom: { xs: "7%", md: "25%" },
              width: { xs: "40px", md: "40px" },
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "55%" },
              height: { xs: "350px", md: "auto" },
              zIndex: 1,
            }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: "0", md: "-10%" },
                bottom: { xs: "8%", md: "-40%" },
                width: { xs: "100%", md: "115%" },
                height: { xs: "100%", md: "120%" },
              }}>
              <Image
                src={laptopMockup}
                alt="Make the most of our t-shirt printing"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "left bottom",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 32, sm: 36, md: 38 },
                lineHeight: 1.2,
                mb: 2,
                color: "text.primary",
                maxWidth: "400px",
                textAlign: { xs: "center", md: "left" },
              }}>
              10,000+ of free images, icons, and graphics
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: 16, md: 16 },
                fontWeight: 400,
                mb: 3,
              }}>
              You&apos;ve got the ideas, we&apos;ve got the tools
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "primary",
                color: "white",
                borderRadius: "12px",
                textTransform: "none",
                px: 4,
                py: 0.8,
              }}>
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
