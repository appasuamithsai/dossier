import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type TabProps = {
  tabNames: string[];
  tabValues: React.ReactNode[];
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: TabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {props.tabNames.map((name: string, index: number) => (
            <Tab
              label={
                value == index ? (
                  <Typography variant="caption2">{name}</Typography>
                ) : (
                  <Typography variant="caption3">{name}</Typography>
                )
              }
              key={index}
              {...a11yProps(index)}
              data-testid="tab"
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
      </Box>
      {props.tabValues.map((v: React.ReactNode, index: number) => (
        <TabPanel
          value={value}
          data-testid="tab-panel"
          index={index}
          key={index}
        >
          {v}
        </TabPanel>
      ))}
    </Box>
  );
}
