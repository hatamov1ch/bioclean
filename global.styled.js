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
		font-size: 2rem;
		font-style: normal;
		line-height: 1.5;

		@media (max-width: 768px) {
			font-size: 1.55rem;
			line-height: 1.35;
		}
	}
	
	.container {
		width: 92.5%;
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

	h2 {
		font-size: 7rem;

		@media (max-width: 1500px) {
			font-size: 5.5rem;
			line-height: 1;
		}

		@media (max-width: 760px) {
			font-size: 4.5rem;
			line-height: 1;
			text-align: center;
		}
	}

	h3 {
		font-size: 2.75rem;

		@media (max-width: 760px) {
			font-size: 2.75rem;
		}

		@media (max-width: 450px) {
			font-size: clamp(2.45rem, 10vw, 2.75rem);
			line-height: 1;
		}
	}

	.word-wrap {
		display: block;
	}
`;

export default GlobalStyle;
