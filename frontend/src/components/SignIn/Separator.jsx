/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import React from "react";

function HSeparator(props) {
  const { variant, children, ...rest } = props;
  return <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
}

function VSeparator(props) {
  const { variant, children, ...rest } = props;
  return <Flex w="1px" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
}

export { HSeparator, VSeparator };
