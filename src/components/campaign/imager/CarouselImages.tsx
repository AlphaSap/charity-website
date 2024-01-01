import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./car.css";

const steps = [
  {
    label: "Create an ad",
    img: `/caro/4.jpg`,
  },
  {
    label: "Create an ad group",
    img: `/caro/3.jpg`,
  },
  {
    label: "Select campaign settings",
    img: `/caro/2.jpg`,
  },
  {
    label: "Select campaign settings",
    img: `/caro/1.jpg`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const NavigationButtons = () => {
    return (
      <>
        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </>
    );
  };
  // <Box sx={{ marginBottom: 6 }}>
  //   <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 3 }}>
  //     <Typography variant="h4" fontWeight={"bold"}>
  //       Food Supply For Morocco
  //     </Typography>
  //   </Box>
  //   <Stack
  //     sx={{
  //       display: "flex",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Stack
  //       sx={{
  //         height: 255,
  //         maxWidth: 400,
  //         width: "100%",
  //         objectFit: "fill",
  //         display: "flex",
  //       }}
  //     >
  //     </Stack>
  //   </Stack>
  // </Box>

  return (
    <>
      <Box sx={{ display: " tf", paddingX: { xs: "2rem", md: "5rem" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={steps[activeStep].img} className={"img-de-size"} />
        </Box>
        <NavigationButtons />
      </Box>
    </>
  );
}
