import { mode } from "@chakra-ui/theme-tools";

const sliderStyles = {
  components: {
    RangeSlider: {
      variants: {
        main: (props) => ({
          thumb: {
            bg: mode("brand.500", "brand.400")(props),
          },
        }),
      },
    },
  },
};

export default sliderStyles;
