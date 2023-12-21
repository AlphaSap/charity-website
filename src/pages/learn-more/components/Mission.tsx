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
          }}
        >
          <Box sx={{ alignItems: "center" }}>
            <Typography
              fontSize={{
                xs: "1.6rem",
                md: "2.5rem",
              }}
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Our Mission
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Mission;
