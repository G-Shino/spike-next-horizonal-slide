import React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "@emotion/styled";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Item } from "../components/Item";
import { useRouter } from "next/router";
import Head from "next/head";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

function allyProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const FullWidthTabs: React.FC = () => {
  const classes = useStyles();
  const url = "https://spike-next-horizonal-slide.vercel.app";
  const images = ["/heejun_ogp.png", "/shinogu_ogp.png", "/takuro_ogp.png"];
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [path, setPath] = React.useState("");
  const router = useRouter();
  React.useEffect(() => {
    if (router.query.index) {
      setValue(Number(router.query.index));
    }
    console.log(router);
    setPath(router.asPath);
  }, [router]);

  const handleChange = (_: any, newValue: number) => {
    router.push({
      pathname: "/swipe",
      query: { index: `${newValue}` },
    });
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Head>
        <meta name="keywords" content="" />
        <meta property="og:url" content={url + path} />
        <meta property="og:type" content="" />
        <meta property="og:title" content={path} />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content={"Swipe_" + value} />
        <meta property="og:image" content={images[value]} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LogoDiv>
        <Typography variant="h1">ロゴとか</Typography>
      </LogoDiv>
      <AppBar position="sticky" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...allyProps(0)} />
          <Tab label="Item Two" {...allyProps(1)} />
          <Tab label="Item Three" {...allyProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        resistance
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
          <Item />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
          <Item />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
          <Item />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default FullWidthTabs;

const LogoDiv = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(-135deg, #e4a972, #9941d8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
