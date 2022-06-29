import { extendTheme } from "@chakra-ui/react";
// import { CardComponent } from "./additions/card/card";
import { buttonStyles } from "./button";
// import { badgeStyles } from "./badge";
// import { inputStyles } from "./input";
// import { progressStyles } from "./progress";
// import { sliderStyles } from "./slider";
// import { textareaStyles } from "./textarea";
// import { switchStyles } from "./switch";
// import { linkStyles } from "./link";
import { CardComponent } from "./card";
import { breakpoints } from "./breakpoints";
import globalStyles from "./styles";

export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  //   badgeStyles, // badge styles
  buttonStyles, // button styles
  //   linkStyles, // link styles
  //   progressStyles, // progress styles
  //   sliderStyles, // slider styles
  //   inputStyles, // input styles
  //   textareaStyles, // textarea styles
  //   switchStyles, // switch styles
  CardComponent // card component
);
