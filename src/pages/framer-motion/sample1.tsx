import React from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={() => {
        Router.push("/framer-motion/sample2");
      }}
    >
      <WrapperDiv>
        <Button
          variant="contained"
          onClick={() => Router.push("/framer-motion/sample2")}
        >
          Next
        </Button>
      </WrapperDiv>
    </motion.div>
  );
};

export default Index;

const WrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#05fbff, #1e00ff);
  display: flex;
  justify-content: center;
  align-items: center;
`;
