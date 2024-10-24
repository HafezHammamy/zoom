import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { paths } from "paths";

import { RouterLink } from "./router-link";
import { Grid } from "@mui/system";

// import { Logo } from "src/components/logo";

const sections = [
  {
    title: "Pages",
    items: [
      {
        title: "Pricing",
        path: paths.pricing,
      },
      {
        title: "Contact us",
        path: paths.contact,
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        title: "Privacy Policy",
        path: "policy",
      },
      {
        title: "Terms and Conditions",
        path: "terms-and-conditions",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Recruiter",
        path: paths.guest.recruiter.index,
      },
      {
        title: "Candidate",
        path: paths.index,
      },
    ],
  },
];
const now = new Date();
export const Footer = (props) => {
  const _theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        pb: 6,
        pt: {
          md: 15,
          xs: 6,
        },
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            xs={12}
            sm={4}
            md={3}
            sx={{
              order: {
                xs: 4,
                md: 1,
              },
            }}
          >
            <Stack spacing={1}>
              <Stack
                alignItems="center"
                component={RouterLink}
                direction="row"
                display="inline-flex"
                href={paths.index}
                spacing={1}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    height: 24,
                    width: 24,
                  }}
                ></Box>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                © {now.getFullYear()} Qualified crew
              </Typography>
            </Stack>
          </Grid>
          {sections.map((section, index) => (
            <Grid
              key={section.title}
              xs={12}
              sm={4}
              md={3}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
              }}
            >
              <Typography color="text.secondary" variant="overline">
                {section.title}
              </Typography>
              <Stack
                component="ul"
                spacing={1}
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                }}
              >
                {section.items.map((item) => {
                  const linkProps = item.path
                    ? item.external
                      ? {
                          component: "a",
                          href: item.path,
                          target: "_blank",
                        }
                      : {
                          component: RouterLink,
                          href: item.path,
                        }
                    : {};

                  return (
                    <Stack
                      alignItems="center"
                      direction="row"
                      key={item.title}
                      spacing={2}
                    >
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          height: 2,
                          width: 12,
                        }}
                      />
                      <Link
                        color="text.primary"
                        variant="subtitle2"
                        {...linkProps}
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Typography color="text.secondary" variant="caption">
          All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};
