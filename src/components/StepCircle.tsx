import Box from "@mui/material/Box";

function StepCircle({ number, active }: { number: string; active: boolean }) {
  return (
    <Box
      sx={{
        width: { xs: 32, sm: 36, md: 40 },
        height: { xs: 32, sm: 36, md: 40 },
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: { xs: 15, md: 18 },
        bgcolor: active ? "primary.main" : "#ffffff",
        color: active ? "#ffffff" : "primary.main",
        boxShadow: "0px 7px 30px 0px #00000021",
      }}>
      {number}
    </Box>
  );
}

export default StepCircle;
