import { Box, Container } from "@mui/material";
import Category from "@/types/Category";
import CategoryCard from "../CategoryCard";
import hoodieImg from "@/assets/images/hoodies.jpg";
import mockupImg from "@/assets/images/t-shirt.jpg";
import sweaterImg from "@/assets/images/sweater.jpg";
import tanktopImg from "@/assets/images/tanktop.jpg";
import designerImg from "@/assets/images/designer.jpg";

const leftColumn: Category[] = [
  { image: hoodieImg, label: "Shop Hoodies" },
  { image: tanktopImg, label: "Shop Tanktop" },
];

const rightColumn: Category[] = [
  { image: sweaterImg, label: "Shop Sweater" },
  { image: designerImg, label: "Shop Designer" },
];

export default function CategoryGrid() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          py: 4,
        }}>
        {/* Left column */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
          {leftColumn.map((cat) => (
            <Box key={cat.label} sx={{ flex: 1 }}>
              <CategoryCard {...cat} />
            </Box>
          ))}
        </Box>

        {/* Middle - big mockup */}
        <Box sx={{ flex: 2 }}>
          <CategoryCard image={mockupImg} label="Shop T-Shirt" />
        </Box>

        {/* Right column */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
          {rightColumn.map((cat) => (
            <Box key={cat.label} sx={{ flex: 1 }}>
              <CategoryCard {...cat} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
