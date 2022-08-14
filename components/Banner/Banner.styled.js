import styled from "styled-components";

const StyledBanner = styled.div`
	background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
		url("/images/background.jpg") no-repeat scroll 50% 0 #1b120d;
	background-size: cover;
	overflow: hidden;
`;

export const Content = styled.div`
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	position: relative;

	@media (max-width: 510px) {
		padding-top: 10rem;
	}
`;

export const Main = styled.div`
	position: relative;
	z-index: 1;
	color: ${({ theme }) => theme.colors.light};

	h1 {
		font-size: 18rem;
		line-height: 0.9;
		margin-bottom: 0.35em;
		overflow: hidden;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

		strong {
			font-size: 5.75rem;
		}
	}

	p {
		margin-bottom: 3em;
		max-width: 50ch;
		line-height: 1.65;
	}

	button {
		padding: 1em 2.5em;
		font-weight: 700;
		text-transform: uppercase;
		border-radius: 0.5rem;
		box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.75);
		background: rgba(25, 25, 25, 0.5);
		border: 1px solid ${({ theme }) => theme.colors.light};
		color: ${({ theme }) => theme.colors.light};
	}

	@media (max-width: 1500px) {
		h1 {
			font-size: 15rem;

			strong {
				font-size: 4.79rem;
			}
		}

		p {
			font-size: 1.85rem;
		}
	}

	@media (max-width: 1200px) {
		h1 {
			font-size: 12.5rem;

			strong {
				font-size: 4rem;
			}
		}
	}

	@media (max-width: 897px) {
		h1 {
			font-size: 10rem;

			strong {
				font-size: 3.2rem;
			}
		}

		p {
			max-width: 40ch;
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 7.5rem;

			strong {
				font-size: 2.4rem;
			}
		}

		p {
			max-width: 33ch;
		}

		button {
			font-size: 1.75rem;
		}
	}

	@media (max-width: 510px) {
		margin-bottom: 5rem;

		p {
			font-size: 1.6rem;
			max-width: 100%;
			margin-bottom: 3rem;
		}
	}
`;

export const ImageWrapper = styled.div`
	width: 95vh;
	max-width: 100vh;
	position: absolute;
	bottom: -12.5rem;
	right: -5rem;
	opacity: 0.75;
	z-index: 500;

	@media (max-width: 1024px) {
		right: -20rem;
	}

	@media (max-width: 768px) {
		right: -25rem;
	}

	@media (max-width: 650px) {
		right: -35rem;
	}

	@media (max-width: 510px) {
		position: static;
		margin-top: auto;
	}

	@media (max-width: 350px) {
		display: none;
	}
`;

export default StyledBanner;
