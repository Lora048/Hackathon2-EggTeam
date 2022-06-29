/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Box, useStyleConfig } from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
