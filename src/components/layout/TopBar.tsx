import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import facebookIcon from "@/assets/icons/icon-facebook.svg";
import instagramIcon from "@/assets/icons/icon-instagram.svg";
import twitterIcon from "@/assets/icons/icon-twitter.svg";
import youtubeIcon from "@/assets/icons/icon-youtube.svg";
import fireIcon from "@/assets/icons/fire.svg";
import { colors } from "@/theme/colors";

export default function TopBar() {
  return (
    <Box sx={{ backgroundColor: colors.freeShippingBackground, py: 1 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Social Icons*/}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}>
            <Image src={twitterIcon} alt="Twitter" width={16} height={16} />
            <Image src={facebookIcon} alt="Facebook" width={16} height={16} />
            <Image src={instagramIcon} alt="Instagram" width={16} height={16} />
            <Image src={youtubeIcon} alt="YouTube" width={16} height={16} />
          </Stack>

          {/* Shipping Message */}
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Image src={fireIcon} alt="" width={16} height={16} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                display: { xs: "block", md: "none" },
              }}>
              Free shipping $50+
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                display: { xs: "none", md: "block" },
              }}>
              Free shipping on all U.S. orders $50+
            </Typography>
          </Stack>

          {/* Auth Links */}
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.primary" }}>
              Login
            </Typography>
            <Box
              sx={{
                backgroundColor: "text.primary",
                color: "#ffffff",
                px: 2,
                py: 0.1,
                borderRadius: "7px",
                fontSize: "14px",
                fontWeight: 700,
              }}>
              Sign Up
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
