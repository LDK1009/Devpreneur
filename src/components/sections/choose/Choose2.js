import Link from "next/link";

const Choose2 = () => {
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								왜 선택해야 할까요?
							</span>
							<h2 className="sec-title title-anim">
								전문성을 바탕으로 한 비즈니스 성장
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					<div className="col-md-6 col-lg-4">
						<div className="choose-box customers-box h9-choose-box right-swipe">
							<h4 className="title">
								최고의 비즈니스 솔루션을 제공합니다.
							</h4>
							<div className="customers-inner">
								<div className="customers">
									<ul>
										<li className="wow fadeInLeft" data-wow-delay=".5s">
											<img src="/images/testimonial/client-1.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".6s">
											<img src="/images/testimonial/client-2.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".7s">
											<img src="/images/testimonial/client-3.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".8s">
											<img src="/images/testimonial/client-4.webp" alt="" />
										</li>
									</ul>
								</div>
								<div className="rating-area">
									<div className="star-ratings">
										<div className="fill-ratings">
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<h5 className="customers-text">100+ 만족한 고객</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="choose-box h9-choose-box right-swipe">
							<div className="choose-content">
								<div className="choose-icon">
									<i className="tji-award"></i>
								</div>
								<h4 className="title">검증된 전문성</h4>
								<p className="desc">
									다양한 프로젝트 경험을 바탕으로 검증된 전문성을 보유하고 있으며,
									모든 프로젝트에서 최고의 품질을 제공합니다.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div
							className="choose-box h9-choose-box h9-choose-bg right-swipe"
							style={{
								backgroundImage: "url('/images/choose/h9-choose-bg.webp')",
							}}
						>
							<div className="choose-content">
								<h4 className="title">전담 지원</h4>
								<p className="desc">
									고객의 모든 문의와 요구사항에 빠르게 대응하며,
									비즈니스가 원활하게 운영될 수 있도록 효과적인 솔루션을 제공합니다.
								</p>
								<Link className="text-btn" href="/contact">
									<span className="btn-text">
										<span>문의하기</span>
									</span>
									<span className="btn-icon">
										<i className="tji-arrow-right-long"></i>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Choose2;
