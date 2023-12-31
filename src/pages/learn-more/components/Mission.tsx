import { Box, Stack, Typography } from "@mui/material";

function Mission() {
  return (
    <>
      <Box>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          gap={5}
          sx={{
            textAlign: "center",
            marginTop: 3,
            marginX: {
              md: 20,
              xs: 5,
            },
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              paddingX: {
                sx: 2,
                md: 20,
              },
            }}
          >
            <Typography
              fontSize={{
                xs: "1.6rem",
                md: "2.5rem",
              }}
              sx={{
                marginBottom: 2,
                fontWeight: "bold",
              }}
            >
              Our Mission
            </Typography>
            <Typography>
              At Dholar Community, our mission is rooted in unwavering
              compassion and dedication to serving humanity during times of
              crisis and need. We stand as a beacon of hope and solidarity for
              communities affected by unforeseen disasters, aiming to provide
              comprehensive aid and support.
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "1.2rem",
                  md: "1.4rem",
                }}
                sx={{
                  textDecoration: "underline",
                  paddingY: 2,
                }}
              >
                Empowering Communities
              </Typography>
              Our primary objective is to empower and uplift communities facing
              adversity. We strive to address immediate needs such as food,
              shelter, and essential supplies, ensuring that no individual or
              family is left without the fundamental necessities required for
              survival.
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "1.2rem",
                  md: "1.4rem",
                }}
                sx={{
                  textDecoration: "underline",
                  paddingY: 2,
                }}
              >
                Rapid Response{" "}
              </Typography>
              We believe in swift and effective action. Our dedicated team and
              network of volunteers are committed to quick response times,
              mobilizing resources promptly to provide critical aid to those
              impacted by disasters, natural calamities, or socio-economic
              crises.
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "1.2rem",
                  md: "1.4rem",
                }}
                sx={{
                  textDecoration: "underline",
                  paddingY: 2,
                }}
              >
                Holistic Support
              </Typography>
              Beyond material provisions, we recognize the importance of
              nurturing emotional well-being. Dholar Community integrates
              psychosocial support programs into our initiatives, offering
              counseling services and community activities aimed at fostering
              resilience and restoring a sense of hope and normalcy.
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "1.2rem",
                  md: "1.4rem",
                }}
                sx={{
                  textDecoration: "underline",
                  paddingY: 2,
                }}
              >
                Inspiring Hope
              </Typography>
              Above all, our mission is to inspire hope. We aim to be a source
              of strength and support for communities navigating through
              difficult times, showcasing the enduring power of compassion,
              solidarity, and humanity. At Dholar Community, we believe that by
              standing together and extending a helping hand, we can create a
              world where kindness and empathy triumph over adversity. Join us
              in our mission to make a meaningful difference in the lives of
              those in need.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Mission;
