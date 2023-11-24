import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";

function Faq() {
  const [expanded, setEx] = useState(-1);

  const handleChange = (panel: any) => (_event: any, newExpanded: any) => {
    setEx(newExpanded ? panel : false);
  };

  let q = faqs.map((x, i) => {
    return (
      <Accordion
        key={i}
        expanded={i === expanded}
        onChange={handleChange(i)}
        disableGutters={false}
        sx={{
          padding: 0,
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#ededed",
          }}
        >
          <ExpandMoreRounded />
          <Typography>{x.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {x.answer}
            {x.children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <>
      <Stack
        sx={{
          marginTop: 3,
          paddingX: {
            xs: 4,
            md: 10,
          },
        }}
      >
        {q}
      </Stack>
    </>
  );
}

type FaqObj = {
  question: string;
  answer: string;
  children?: ReactNode;
};

const faqs: FaqObj[] = [
  {
    question: "Where does my donation go?",
    answer:
      "Rest assured, every penny of your donation directly impacts those in need. Dholar Community is proud to commit 100% of your contribution to providing essential aid, including food, water, shelter, medical assistance, and long-term community development. Transparency and your trust are paramount in our mission to make a meaningful difference in the lives of those facing crises. ",
  },
  {
    question: "What is the donation policy",
    answer:
      "At Dholar Community, we deeply appreciate and rely on the generous support of individuals and organizations committed to our mission. Your donations play a crucial role in enabling us to provide essential aid to those in need. To ensure transparency and clarity, we have outlined our donation policy [here]",
  },

  {
    question: "How can I contact Dholar Community for further inquiries?",
    answer: "You can email us at: support@dholarcommunity.co.uk",
  },
  {
    question: "How can I stay updated on Dholar Community's activities?",
    answer: "Subscribe to our Newletter from our website",
  },
  {
    question: "What types of humanitarian aid does Dholar Community provide?",
    answer:
      "Dholar Community provides vital humanitarian aid, including emergency relief, food, clean water, shelter, medical assistance, livelihood programs, and psychosocial services. Our comprehensive approach aims to address immediate needs while fostering long-term resilience",
  },
];

export default Faq;
