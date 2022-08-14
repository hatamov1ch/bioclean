import { ThemeProvider } from "styled-components";

export const Theme = ({ theme, children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
