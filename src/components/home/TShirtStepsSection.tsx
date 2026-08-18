import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import processMockupImage from "@/assets/images/t-shirt-printing.png";
import { colors } from "@/theme/colors";
import steps from "@/constants/steps";
import StepCircle from "@/components/StepCircle";

export default function TShirtStepsSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: colors.sectionBackground,
        py: { xs: 6, md: 7 },
      }}>
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
          T-shirt printing made easy.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 4, md: 4 },
            color: "text.secondary",
            fontSize: { xs: 14, sm: 15, md: 16 },
            fontWeight: 400,
          }}>
          Let us show you how your product come to life.
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 10 }}
          sx={{ alignItems: "center" }}>
          {/* Steps timeline */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Stack spacing={0.4}>
              {steps.map((step, index) => (
                <Box key={step.number}>
                  <Stack
                    direction="row"
                    spacing={{ xs: 1.5, md: 2 }}
                    sx={{ alignItems: "center" }}>
                    <StepCircle number={step.number} active={index === 0} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        textAlign: "left",
                        lineHeight: 1.6,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                      }}>
                      {step.text}
                    </Typography>
                  </Stack>

                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        mt: 0.5,
                        ml: { xs: "15px", sm: "17px", md: "19px" },
                        height: 20,
                        borderLeft: "2px dashed",
                        borderColor: "grey.400",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Mockup image */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: 260, sm: 340, md: 460 },
              }}>
              <Image
                src={processMockupImage}
                alt="T-shirt design tool preview"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
