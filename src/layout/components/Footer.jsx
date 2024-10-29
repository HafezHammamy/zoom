import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, IconButton } from "@mui/material";
import { Grid } from "@mui/system";
import { tokens } from "locales/tokens";
import { paths } from "paths";
import { useTranslation } from "react-i18next";
import { RouterLink } from "./router-link";
// import { Logo } from "src/components/logo";

export const Footer = (props) => {
  // const theme = useTheme();
  const { t } = useTranslation();

  const items = [
    {
      title: t(tokens.nav.home),
      path: paths.index,
    },
    {
      title: t(tokens.nav.about),
      path: paths.aboutUs,
    },
    {
      title: t(tokens.nav.brands),
      path: paths.ourBrands,
    },
    {
      title: t(tokens.nav.contact),
      path: paths.contactUs,
    },
  ];

  const socialStyle = {
    border: "1px solid",
    backgroundColor: "#168C8C",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#147373",
    },
  };

  return (
    <Box sx={{ bgcolor: "#f5f3f8", pt: 2 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={12}>
            <Box>
              <Box>
                <Stack direction={"row"} justifyContent="center">
                  {items.map((section) => (
                    <Button LinkComponent={RouterLink} href={section.path}>
                      {section.title}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid size={12} sx={{ mt: 3 }}>
            <Divider sx={{ borderColor: "#ddd" }} />
          </Grid>
          <Grid size={12}>
            <Box sx={{ p: 5 }}>
              <Stack direction={"row"} justifyContent="center">
                <Typography color="text.secondary" variant="caption">
                  Dynamics &copy; Copyright All Rights Reserved.2024
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={12}>
            <Box sx={{ pb: 5 }}>
              <Stack direction={"row"} spacing={2} justifyContent="center">
                <IconButton sx={socialStyle}>
                  <FacebookIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={socialStyle}>
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={socialStyle}>
                  <WhatsAppIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
