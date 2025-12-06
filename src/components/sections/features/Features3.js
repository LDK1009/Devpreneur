import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "혁신적인 솔루션",
			icon: "tji-innovative",
			desc: "최신 기술과 전략을 활용하여 시장에서 경쟁력을 유지할 수 있도록 최첨단 솔루션을 제공합니다.",
		},
		{
			id: 2,
			title: "검증된 전문성",
			icon: "tji-award",
			desc: "다양한 프로젝트 경험을 바탕으로 검증된 전문성을 보유하고 있으며, 모든 프로젝트에서 최고의 품질을 제공합니다.",
		},
		{
			id: 3,
			title: "전문 팀",
			icon: "tji-team",
			desc: "우리 팀은 항상 고객의 문의에 대응하며 빠른 해결책을 제공하여 시장에서 경쟁력을 유지할 수 있도록 지원합니다.",
		},
		{
			id: 3,
			title: "전담 지원",
			icon: "tji-support",
			desc: "우리 팀은 항상 고객의 문의에 대응하며 빠르고 효과적인 솔루션을 제공하여 비즈니스가 원활하게 운영될 수 있도록 지원합니다.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div
						className="col-lg-4 col-md-6 order-lg-0 order-1 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<FeatureCard3 feature={features[1]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-1 order-0">
						<div className="h4-content-wrap text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>왜 선택해야 할까요?
								</span>
								<h2 className="sec-title title-anim">
									비즈니스를 위한 솔루션
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="/about"
							>
								<span className="btn-text">
									<span>더 알아보기</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-long"></i>
								</span>
							</a>
						</div>
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-2 order-2  wow fadeInUp"
						data-wow-delay=".3s"
					>
						<FeatureCard3 feature={features[2]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-3 order-3 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<FeatureCard3 feature={features[3]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-4 order-4 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<FeatureCard3 feature={features[0]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
							style={{
								backgroundImage: "url('/images/choose/choose-img.webp')",
							}}
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<div className="count-inner">
								<span className="count-text">빠른 성장</span>
								<FunfactSingle currentValue={8.5} symbol={"X"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features3;
