import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import BgCircle from "@/assets/images/pricing-circle.png";
import { colors } from "@/theme/colors";
import pricingPlans from "@/constants/pricingPlans";

const CheckIcon = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.5 6L5.5 10L14.5 1"
      stroke="#3AC279"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: colors.pricingBackground,
        position: "relative",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "7%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "350px", md: "600px" },
          height: { xs: "350px", md: "600px" },
          zIndex: 0,
          opacity: 0.8,
        }}>
        <Image
          src={BgCircle}
          alt="Background Circle"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "26px !important",
                sm: "28px !important",
                md: "32px !important",
              },
              mb: 0.5,
              color: "text.primary",
            }}>
            Simple pricing for everyone
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 14, sm: 15, md: 16 },
              fontWeight: 400,
            }}>
            Choose a plan and get started
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 4, md: 10 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          {pricingPlans.map((plan, index) => (
            <Grid size={{ xs: 12, sm: 8, md: 4 }} key={index}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "12px",
                  p: { xs: 2, md: 3 },
                  position: "relative",
                  boxShadow: plan.isPopular
                    ? "0px 24px 50px rgba(0,0,0,0.08)"
                    : "0px 12px 30px rgba(0,0,0,0.04)",
                  transform: { md: plan.isPopular ? "scale(1.05)" : "none" },
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}>
                {plan.isPopular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "text.primary",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 600,
                      px: 2,
                      borderRadius: "6px",
                    }}>
                    Popular
                  </Box>
                )}

                <Typography
                  sx={{
                    color: "text.primary",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 500,
                    mb: 3,
                  }}>
                  {plan.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 4,
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 38, md: 44 },
                      fontWeight: 800,
                      color: "#111",
                    }}>
                    {plan.price}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#777", ml: 0.5 }}>
                    {plan.period}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "#F0F0F0",
                    mb: 4,
                  }}
                />

                <Stack spacing={0} sx={{ mb: 2, flexGrow: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Box
                      key={i}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <CheckIcon />
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "text.primary",
                          fontWeight: 500,
                        }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    bgcolor: plan.btnBg,
                    color: plan.btnColor,
                    borderRadius: "8px",
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: plan.isPopular ? "#2fa666" : "#dfefeb",
                      boxShadow: "none",
                    },
                  }}>
                  {plan.btnText}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
