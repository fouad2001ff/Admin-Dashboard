import { Box } from "@mui/material";
import Header from "../../Header";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { accordionData } from "./data";

function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => ( isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {accordionData.map((item) => (
          <AccordionItem
            key={item.panel}
            panel={item.panel}
            handleChange={handleChange}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
            defaultExpanded={item.defaultExpanded}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Faq;
