import FeatureCard4 from "@/components/shared/cards/FeatureCard4";

const Features5 = ({ type }) => {
	const features = [
		{
			title: "혁신적인 솔루션",
			desc: "최신 기술과 전략을 활용하여 시장에서 경쟁력을 유지할 수 있도록 최첨단 솔루션을 제공합니다.",
			icon: "tji-innovative",
		},
		{
			title: "검증된 전문성",
			desc: "다양한 프로젝트 경험을 바탕으로 검증된 전문성을 보유하고 있으며, 모든 프로젝트에서 최고의 품질을 제공합니다.",
			icon: "tji-award",
		},
		{
			title: "전담 지원",
			desc: "고객의 모든 문의와 요구사항에 빠르게 대응하며, 비즈니스가 원활하게 운영될 수 있도록 효과적인 솔루션을 제공합니다.",
			icon: "tji-support",
		},
	];

	return (
		<section
			id="choose"
			className="tj-choose-section h6-choose h7-choose section-gap"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>왜 선택해야 할까요?
							</span>
							<h2 className="sec-title text-anim">
								전문성을 바탕으로 한 비즈니스 성장
							</h2>
						</div>
					</div>
				</div>
				<div
					className="row h7-choose-item-wrapper  wow fadeInLeftBig"
					data-wow-delay=".4s"
				>
					{features.map((feature, idx) => (
						<FeatureCard4 key={idx} feature={feature} idx={idx} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Features5;
