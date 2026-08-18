import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#2EBB77",
        },
        text: {
            primary: "#000000",
            secondary: "#7E7E7E",
        },
        background: {
            default: "#ffffff",
        },
    },
    typography: {
        fontFamily: "var(--font-plus-jakarta-sans)",
        h1: {
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "46px",
            textAlign: "center",
        },
        body1: {
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "32px",
            textAlign: "center",
            color: "#7E7E7E",
        },
    },
    shape: {
        borderRadius: 12,
    },
});