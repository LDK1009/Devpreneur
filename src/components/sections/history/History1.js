import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "창립 및 초기",
			desc: "모든 규모의 비즈니스가 끊임없이 변화하는 시장에서 성장할 수 있도록 지원하는 것이 우리의 사명입니다. 탁월한 가치 제공에 전념하고 있습니다.",
			images: [
				"/images/history/history-1.webp",
				"/images/history/history-2.webp",
			],
			year: 2008,
		},
		{
			title: "확장과 성장",
			desc: "모든 규모의 비즈니스가 끊임없이 변화하는 시장에서 성장할 수 있도록 지원하는 것이 우리의 사명입니다. 탁월한 가치 제공에 전념하고 있습니다.",
			images: [
				"/images/history/history-3.webp",
				"/images/history/history-4.webp",
			],
			year: 2012,
		},
		{
			title: "혁신과 업계 리더십",
			desc: "모든 규모의 비즈니스가 끊임없이 변화하는 시장에서 성장할 수 있도록 지원하는 것이 우리의 사명입니다. 탁월한 가치 제공에 전념하고 있습니다.",
			images: [
				"/images/history/history-5.webp",
				"/images/history/history-6.webp",
			],
			year: 2016,
		},
		{
			title: "글로벌 확장과 다각화",
			desc: "모든 규모의 비즈니스가 끊임없이 변화하는 시장에서 성장할 수 있도록 지원하는 것이 우리의 사명입니다. 탁월한 가치 제공에 전념하고 있습니다.",
			images: [
				"/images/history/history-7.webp",
				"/images/history/history-8.webp",
			],
			year: 2020,
		},
		{
			title: "미래를 향하여",
			desc: "모든 규모의 비즈니스가 끊임없이 변화하는 시장에서 성장할 수 있도록 지원하는 것이 우리의 사명입니다. 탁월한 가치 제공에 전념하고 있습니다.",
			images: [
				"/images/history/history-9.webp",
				"/images/history/history-1.webp",
			],
			year: 2024,
		},
	];
	return (
		<section className="tj-history-area section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="timeline">
							{history?.length
								? history?.map(({ title, desc, images, year }, idx) => (
										<div
											key={idx}
											className="timeline-inner wow fadeInUp"
											data-wow-delay={`0.${idx + 1 + idx}s`}
										>
											<div className="date">{year}</div>
											<div className="content">
												<div className="top">
													<span>{modifyNumber(idx + 1)}.</span>
													<h4 className="title">{title}</h4>
													<p>{desc}</p>
												</div>
												<div className="bottom">
													{images?.length
														? images?.map((img, idx) => (
																<Image
																	key={idx + 100}
																	src={
																		img ? img : "/images/history/history-1.webp"
																	}
																	alt="history"
																	width={241}
																	height={204}
																	style={{ height: "auto" }}
																/>
														  ))
														: ""}
												</div>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History1;
