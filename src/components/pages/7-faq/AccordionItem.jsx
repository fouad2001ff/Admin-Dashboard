import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({
  panel,
  handleChange,
  title,
  subTitle,
  content,
  defaultExpanded,
}) => (
  <Accordion defaultExpanded={defaultExpanded} onChange={handleChange(panel)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${panel}bh-content`}
      id={`${panel}bh-header`}
    >
      <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
      <Typography sx={{ color: "text.secondary" }}>{subTitle}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

export default AccordionItem;
