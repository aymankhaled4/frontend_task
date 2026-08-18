import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import features from "@/constants/features";

export default function FeaturesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontSize: {
              xs: "26px !important",
              sm: "28px !important",
              md: "32px !important",
            },
            mb: 0.7,
            color: "text.primary",
          }}>
          All the features you need
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 4, md: 6 },
            color: "text.secondary",
            fontSize: { xs: 14, sm: 15, md: 16 },
            fontWeight: 400,
          }}>
          You&apos;ve got the ideas, we&apos;ve got the tools
        </Typography>

        {/* Feature cards */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: "12px",
                  position: "relative",
                  width: "100%",
                  aspectRatio: "0.89 / 1",
                  overflow: "hidden",
                }}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    px: { xs: 3, md: 3.5 },
                    pb: { xs: 3, md: 3 },
                    width: "95%",
                  }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: 18, md: 20 },
                      color: "text.primary",
                      mb: 0.7,
                      textAlign: "left",
                    }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: 14,
                      textAlign: "left",
                      lineHeight: 1.7,
                    }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
