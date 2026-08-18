import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import leftBanner from "@/assets/images/left-banner.jpg";
import rightBanner from "@/assets/images/right-banner.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "6px",
      }}>
      {/* Left half */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#E4F3E9",
          display: "flex",
          alignItems: "flex-end",
          pb: "60px",
          position: "relative",
          minHeight: { xs: "350px", md: "570px" },
          overflow: "hidden",
        }}>
        <Box
          sx={{
            pl: { xs: "30px", md: "50px" },
            zIndex: 1,
            maxWidth: 250,
            textAlign: "left",
          }}>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              mb: 1,
              lineHeight: 1.4,
            }}>
            T-shirt printing made easy.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Create your design for your online business
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              px: 3,
              color: "#ffffff",
            }}>
            Create a T-shirt
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "100%",
          }}>
          <Image
            src={leftBanner}
            alt="T-shirt printing"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Right half */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F2E9F7",
          display: "flex",
          alignItems: "flex-end",
          pb: "60px",
          position: "relative",
          minHeight: { xs: "350px", md: "570px" },
          overflow: "hidden",
        }}>
        <Box
          sx={{
            pl: { xs: "30px", md: "50px" },
            zIndex: 1,
            maxWidth: 250,
            textAlign: "left",
          }}>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              mb: 1,
              maxWidth: 100,
              lineHeight: 1.4,
            }}>
            Marina Test
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Print shirts for yourself or your creative works
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "#ffffff",
              borderRadius: "12px",
              textTransform: "none",
              px: 3,
            }}>
            Shop Now
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "100%",
          }}>
          <Image
            src={rightBanner}
            alt="Marina Test"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
