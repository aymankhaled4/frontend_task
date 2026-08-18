import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import values from "@/constants/values";

export default function ValueProps() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 20 },
        }}>
        {values.map((feature) => (
          <Box
            key={feature.title}
            sx={{
              flex: 1,
              textAlign: "left",
              display: "flex",
              gap: 2.2,
            }}>
            <Image
              src={feature.icon}
              alt={feature.title}
              width={42}
              height={42}
            />

            <Box>
              <Typography
                variant="subtitle1"
                sx={{ color: "text.primary", fontWeight: 700, mb: 0.5 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {feature.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
