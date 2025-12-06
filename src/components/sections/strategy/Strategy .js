import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";

const Strategy = () => {
	return (
		<section className="h5-strategy section-gap ">
			<div className="container gap-30-30">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading style-3 h5-strategy-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>왜 선택해야 할까요?
							</span>
							<h2 className="sec-title text-anim ">
								측정 가능한 결과를 제공하고 신뢰와 혁신을 통해
								지속적인 관계를 구축하는 데 전념하고 있습니다.
							</h2>
							<ButtonPrimary text={"더 알아보기"} url={"/about"} />
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-1 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<h4 className="h5-strategy-title">
								성장을 위한 재브랜딩 전략
							</h4>
							<div className="h5-strategy-avatar">
								<img src="/images/strategy/strategy-avatar.webp" alt="" />
							</div>
							<div className="h5-strategy-counter">
								<div className="count-inner h5-strategy-counter-inner">
									<FunfactSingle currentValue={200} />
									<span className="count-text">
										만족한 고객들과 함께 일하고 있습니다.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<h4 className="h5-strategy-title">
								Rebranding Strategy for a Growing
							</h4>
							<div className="h5-strategy-chart">
								<img src="/images/strategy/strategy-chart.webp" alt="" />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-3 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<h4 className="h5-strategy-title">
								Rebranding Strategy for a Growing
							</h4>
							<p className="h5-strategy-desc">
								우리 팀은 항상 고객의 문의에 대응할 준비가 되어 있으며,
								빠른 해결책을 제공합니다.
							</p>
							<div className="h5-strategy-tag-wrapper">
								<Link className="h5-strategy-tag" href="#">
									성장
								</Link>
								<Link className="h5-strategy-tag" href="#">
									성공
								</Link>
								<Link className="h5-strategy-tag" href="#">
									혁신
								</Link>
								<Link className="h5-strategy-tag" href="#">
									리더십
								</Link>
								<Link className="h5-strategy-tag" href="#">
									영향력
								</Link>
								<Link className="h5-strategy-tag" href="#">
									집중
								</Link>
								<Link className="h5-strategy-tag" href="#">
									기술
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Strategy;
