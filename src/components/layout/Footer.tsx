import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { informationLinks, usefulLinks } from "@/constants/footerLinks";
import { colors } from "@/theme/colors";
import Image from "next/image";
import ArrowIcon from "@/assets/icons/arrow.svg";
import logo from "@/assets/images/logo.png";
import paymentIcons from "@/assets/images/payment.png";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: colors.sectionBackground, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ textAlign: "left", mb: 7 }}>
          {/* Mina Space info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", mb: 1.5 }}>
              <Image
                src={logo}
                alt="Mina Space"
                height={30}
                style={{ width: "auto" }}
              />
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              hello@minaspace.io
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
              +02 036 038 3996
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              3665 Paseo Place, Suite 0960 San Diego
            </Typography>
          </Grid>

          {/* Information */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
              Information
            </Typography>
            <Stack spacing={1.5}>
              {informationLinks.map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{ color: "text.secondary" }}>
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Useful links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
              Useful links
            </Typography>
            <Stack spacing={1.5}>
              {usefulLinks.map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{ color: "text.secondary" }}>
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.primary", mb: 1.5 }}>
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 2.5 }}>
              Get the latest news, events & more delivered to your inbox.
            </Typography>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                pl: 2.2,
                pr: 1.5,
                py: 1,
                boxShadow: "0px 4px 34px 0px #0000000D",
              }}>
              <InputBase
                placeholder="Your email address"
                sx={{ fontSize: "14px", flex: 1 }}
              />
              <IconButton sx={{ color: "text.primary" }} size="small">
                <Image
                  src={ArrowIcon}
                  alt="Search"
                  width={16}
                  height={16}
                />{" "}
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Payment icons */}
        <Stack sx={{ alignItems: "center", mb: 2.5 }}>
          <Image
            src={paymentIcons}
            alt="Payment methods"
            height={24}
            style={{ width: "auto" }}
          />
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "center", mt: 2 }}>
          © 2022 MinaSpace. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
