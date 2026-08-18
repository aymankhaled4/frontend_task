import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Category from "@/types/Category";
import Image from "next/image";

function CategoryCard({ image, label }: Category) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        height: "100%",
        minHeight: 300,
      }}>
      <Image src={image} alt={label} fill style={{ objectFit: "cover" }} />

      <Typography
        sx={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          px: 2,
          py: 0.5,
          fontWeight: 700,
          fontSize: 13,
          whiteSpace: "nowrap",
          color: "text.primary",
        }}>
        {label}
      </Typography>
    </Box>
  );
}

export default CategoryCard;
