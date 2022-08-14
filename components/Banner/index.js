import StyledBanner, { Content, Main, ImageWrapper } from "./Banner.styled";
import Image from "next/image";
import Smoke from "../Smoke";

const Banner = () => {
	return (
		<StyledBanner>
			<div className="container">
				<Content>
					<Main>
						<h1>
							Bioclean
							<strong className="word-wrap">
								Дезинфекция в ташкенте
							</strong>
						</h1>

						<p>
							Мы избавим ваш бизнес и дом от вредителей. профессиональные
							услуги по дезинфекции, дезинсекции, дератизации и
							дезодорации от наших специалистов!
						</p>

						<button>Отправить заявку</button>
					</Main>

					<ImageWrapper>
						<Image
							src="/images/exterminator.png"
							alt="Специалист bioclean"
							width={1200}
							height={1200}
							layout="responsive"
						/>
					</ImageWrapper>
				</Content>
			</div>

			{/*	Smoke effect	*/}
			<Smoke />
		</StyledBanner>
	);
};

export default Banner;
