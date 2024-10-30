import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme, ownerState }) => ({
  fontWeight: 100,
  wordSpacing: 5,
}));

export const QuoteTypography = styled(Typography)(({ theme, ownerState }) => ({
  textTransform: "uppercase",
  "&::before": {
    content: '""',
    marginRight: "20px",
    width: "71px",
    height: "1px",
    display: "inline-block",
    borderBottom: "1px solid",
    position: "relative",
    top: "-5px",
  },
}));
export default StyledTypography;
