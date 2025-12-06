import FeatureCard2 from "@/components/shared/cards/FeatureCard2";

const Features2 = () => {
	const features = [
		{
			id: 1,
			title: "혁신적인 솔루션",
			icon: "tji-innovative",
			desc: "최신 기술과 전략을 활용하여 경쟁력을 유지합니다.",
		},
		{
			id: 2,
			title: "검증된 전문성",
			icon: "tji-award",
			desc: "업계 리더들로부터 인정받은 검증된 기록을 보유하고 있습니다.",
		},
		{
			id: 3,
			title: "전문 팀",
			icon: "tji-team",
			desc: "우리 팀은 항상 고객의 문의에 대응하며 빠른 해결책을 제공합니다.",
		},
		{
			id: 3,
			title: "전담 지원",
			icon: "tji-support",
			desc: "우리 팀은 항상 고객의 문의에 대응하며 빠르고 효과적인 솔루션을 제공합니다.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>왜 선택해야 할까요?
							</span>
							<h2 className="sec-title title-anim">
								전문성을 바탕으로 한 비즈니스 성장
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features?.length
						? features?.map((feature, idx) => (
								<div key={idx} className="col-xl-3 col-md-6">
									<FeatureCard2 feature={feature} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Features2;
