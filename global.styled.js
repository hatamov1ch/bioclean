import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}
	
	body,
	html {
		width: 100%;
		height: 100%;
	}
	
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${({ theme }) => theme.fonts.body}, sans-serif;
		font-size: 2.1rem;
		font-style: normal;
		line-height: 1.5;
	}
	
	.container {
		width: 90%;
		max-width: ${({ theme }) => theme.containerWidth};
		margin: 0 auto;
	}
	
	a,
	button,
	input {
		font-size: inherit;
	}
	
	a,button,[role='button'] {
		cursor: pointer;
		border: 0;
	}

	h1,
	h2,
	h3 {
		font-family: ${({ theme }) => theme.fonts.accent};
		line-height: 1.25;
		font-weight: 700;
	}

	.word-wrap {
		display: block;
	}
`;

export default GlobalStyle;
