import styled from "styled-components";

const StyledImportant = styled.section`
	color: ${({ theme }) => theme.colors.dark};
`;

export const Content = styled.div`
	padding: 7.5rem 0;
	position: relative;

	h2 {
		margin-bottom: 0.75em;

		@media (max-width: 768px) {
			margin-bottom: 1.25em;
		}
	}

	.image-wrapper {
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	@media (max-width: 1024px) {
		.image-wrapper {
			display: none;
		}
	}
`;

export const Main = styled.div`
	display: flex;
	margin-bottom: 5rem;

	.image-wrapper {
		width: 55rem;
		margin-left: auto;
		align-self: center;
	}

	@media (max-width: 1280px) {
		.image-wrapper {
			margin-left: 5rem;
			width: 50rem;
		}
	}

	@media (max-width: 768px) {
		flex-wrap: wrap;

		.image-wrapper {
			max-width: 90%;
			display: block;
			margin: 3rem auto;
		}
	}
`;

export const Secondary = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.image-wrapper {
		width: 25%;
		margin-right: 5rem;
		order: -1;
	}

	@media (max-width: 1024px) {
		.image-wrapper {
			display: block;
			order: 1;
		}
	}

	@media (max-width: 760px) {
		.image-wrapper {
			display: none;
		}
	}
`;

export const ReadMe = styled.div`
	article {
		margin-bottom: 1em;
		border-bottom: 1px solid #ccc;
		padding-bottom: 1em;
		max-width: 55ch;

		h3 {
			margin-bottom: 0.5em;
		}
	}

	@media (max-width: 1280px) {
		article {
			max-width: 50ch;
		}
	}

	@media (max-width: 1024px) {
		article {
			max-width: 75ch;
		}
	}

	@media (max-width: 768px) {
		font-size: 1.6rem;

		article {
			margin-bottom: 2.5em;
			padding-bottom: 2.5em;
			max-width: 100%;
		}
	}
`;

export const Attention = styled.ul`
	list-style: none;

	li {
		font-size: 1.65rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		max-width: 90ch;

		&:last-child {
			margin-bottom: 0;
		}

		svg {
			font-size: 5rem;
			margin-right: 1rem;
			color: #333;
			fill: #333;
		}

		p {
			width: 100%;
		}
	}

	@media (max-width: 1024px) {
		li {
			max-width: 50ch;
		}
	}

	@media (max-width: 760px) {
		text-align: center;

		h2 {
			margin-bottom: 1.25em;
		}

		li {
			flex-direction: column;
			max-width: 100%;
			margin-bottom: 7.5rem;
			font-size: 1.55rem;

			svg {
				font-size: 15rem;
				margin-bottom: 1rem;
				margin-right: 0;
			}
		}
	}
`;

export default StyledImportant;
