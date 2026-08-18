import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import menuItems from "@/constants/menuItems";
import MobileMenu from "@/components/MobileMenu";
import SearchIcon from "@/assets/icons/icon-search.svg";
import CartIcon from "@/assets/icons/icon-cart.svg";
import StarIcon from "@/assets/icons/icon-star.svg";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  return (
    <Box sx={{ boxShadow: "0 1px 1px rgba(0,0,0,0.03)", py: 0.8 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}>
          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              flex: 1,
              display: { xs: "none", md: "flex" },
            }}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    color: item.active ? "primary.main" : "text.primary",
                  }}>
                  {item.label.toUpperCase()}
                </Typography>
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "12px",
                      color: item.active ? "primary.main" : "text.primary",
                    }}
                  />
                )}
              </Link>
            ))}
          </Stack>

          {/* Mobile Menu Icon*/}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <MobileMenu />
          </Box>

          {/* Logo - Center */}
          <Link href="/">
            <Image
              src={logo}
              alt="Mina Space"
              height={45}
              style={{ width: "auto" }}
            />
          </Link>

          {/* Search + Icons - Right side */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
            {/* Desktop Search */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                border: "2px solid #EEEEEE",
                borderRadius: "12px",
                px: 1.5,
                py: 0.5,
                minWidth: 180,
                display: { xs: "none", md: "flex" },
              }}>
              <Image src={SearchIcon} alt="Search" width={16} height={16} />
              <InputBase
                placeholder="Search..."
                sx={{ ml: 2, fontSize: "14px" }}
              />
            </Stack>

            {/* Mobile Search Icon */}
            <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <Image src={SearchIcon} alt="Search" width={16} height={16} />
            </IconButton>

            <IconButton>
              <Badge
                badgeContent={0}
                color="primary"
                showZero
                sx={{
                  "& .MuiBadge-badge": {
                    color: "#ffffff",
                    transform: "translate(15px, -12px)",
                  },
                }}>
                <Image src={StarIcon} alt="Star" width={16} height={16} />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge
                badgeContent={0}
                color="primary"
                showZero
                sx={{
                  "& .MuiBadge-badge": {
                    color: "#ffffff",
                    transform: "translate(15px, -12px)",
                  },
                }}>
                <Image src={CartIcon} alt="Cart" width={16} height={16} />
              </Badge>
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
