import { Box, Container, Typography, Card, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import TestimonialsBg from "@/assets/images/testimonials-bg.png";
import testimonials from "@/constants/testimonials";

export default function TestimonialsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundImage: `url(${TestimonialsBg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}>
      <Container maxWidth="lg">
        {/* === Header Section === */}
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
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
            What People Are Saying
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 14, sm: 15, md: 16 },
              fontWeight: 400,
            }}>
            We provide support for more than 15K+ Businesses.
          </Typography>
        </Box>

        {/* === Cards Section === */}
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {testimonials.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}>
                {/* User Info */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar
                    src={item.avatar.src}
                    alt={item.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 0.5,
                      }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          color: "text.primary",
                          fontSize: "16px",
                        }}>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "12px" }}>
                        {item.role}
                      </Typography>
                    </Box>
                    {/* Rating Dashes */}
                    <Typography
                      sx={{
                        color: "#F6D87C45",
                        lineHeight: 1,
                        fontSize: "18px",
                        fontWeight: 700,
                        mt: 0.5,
                      }}>
                      ــــــــــــــــــــ
                    </Typography>
                  </Box>
                </Box>

                {/* Quote */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    lineHeight: 1.7,
                    fontSize: "15px",
                  }}>
                  {item.quote}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
            gap: 1.5,
          }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "2px solid #000",
              bgcolor: "transparent",
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#000",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
