import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme, ownerState }) => ({
  fontWeight: 100,
  wordSpacing: 10,
}));

export default StyledTypography;
