import StyledImportant, {
	Content,
	Main,
	Secondary,
	ReadMe,
	Attention,
} from "./Important.styled";

import Image from "next/image";

import { AiFillSecurityScan } from "react-icons/ai";
import { GiGoldScarab } from "react-icons/gi";
import { CgCalendarNext } from "react-icons/cg";

const Important = () => {
	return (
		<StyledImportant>
			<div className="container">
				<Content>
					<Main>
						<ReadMe>
							<h2>Рекомендуем прочесть</h2>

							<article>
								<h3>Насекомые, грызуны, микробы</h3>
								<p>
									Средство с вредителями и паразитами, приводит не
									только к порче продуктов питания, предметов быта
									человека, но так же доказано, что они способны стать
									причиной заражения человека гельминтами и даже
									некоторыми инфекционными заболеваниями, поэтому их
									своевременное уничтожение просто необходимо.
								</p>
							</article>

							<article>
								<h3>Методы обработки</h3>
								<p>
									Мы избавляем от всех видов насекомых, грызунов,
									плесени и микробов. В работе используем самые
									последние и эффективные технологии: микрораспыление,
									холодный туман, горячий туман, барьерная обработка,
									фумигация.
								</p>
							</article>
						</ReadMe>

						<div className="image-wrapper">
							<Image
								layout="responsive"
								width={1000}
								height={900}
								src="/images/pest-control.png"
								alt="Знак предупреждения"
							/>
						</div>
					</Main>

					<Secondary>
						<Attention>
							<li>
								<i>
									<AiFillSecurityScan />
								</i>
								<p>
									Производим полную диагностику, находим источники
									заражения / появления вредителей
								</p>
							</li>
							<li>
								<i>
									<GiGoldScarab />
								</i>
								<p>
									Обрабатываем места проникновения и места присутствия
									(фактические и потенциальные) вредителей, так чтобы
									имеющиеся особи погибли, и новые не приходили вновь
								</p>
							</li>
							<li>
								<i>
									<CgCalendarNext />
								</i>
								<p>
									Даем рекомендации по дальнейшим действиям для
									сохранения результата
								</p>
							</li>
						</Attention>

						<div className="image-wrapper">
							<Image
								src="/images/warning.png"
								width={750}
								height={750}
								alt="Знак предупреждения"
								layout="responsive"
							/>
						</div>
					</Secondary>
				</Content>
			</div>
		</StyledImportant>
	);
};

export default Important;
