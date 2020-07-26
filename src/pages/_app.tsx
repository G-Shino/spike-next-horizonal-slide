import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import globalCSS from "./../styles/global";
import { Global } from "@emotion/core";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "../constants/Theme";

import { AnimatePresence, motion, Transition } from "framer-motion";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
  router,
}) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };

  const normal: Transition = {
    duration: 0,
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={globalCSS} />
        <StylesProvider injectFirst>
          <CssBaseline />
          <AnimatePresence exitBeforeEnter>
            {(() => {
              if (
                router.route === "/sample" ||
                router.route === "/swipe" ||
                router.route === "/"
              ) {
                return (
                  <motion.div
                    transition={normal}
                    key={router.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="page-transition-container"
                  >
                    <Component {...pageProps} key={router.route} />
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    transition={spring}
                    key={router.pathname}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    id="page-transition-container"
                  >
                    <Component {...pageProps} key={router.route} />
                  </motion.div>
                );
              }
            })()}
          </AnimatePresence>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
