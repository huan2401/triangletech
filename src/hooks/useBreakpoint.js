import { Grid } from "antd";

export const useBreakpoints = () => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const isMobile = screen.xs;
  return {
    isMobile,
  };
};
