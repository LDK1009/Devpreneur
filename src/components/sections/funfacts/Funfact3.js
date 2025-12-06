import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";
const Funfact3 = () => {
	return (
		<section className=" h8-funfact section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>성과 지표
							</span>
							<h2 className="sec-title title-anim">
								성과를 나타내는 숫자와 사실들
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-between">
					<div className="col-12 col-lg-6">
						<div
							className="h8-funfact-banner wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="h8-funfact-banner-img">
								<img src="/images/funfact/h8-funfact-banner.webp" alt="" />
							</div>
							<div className="box-area">
								<div className="call-box wow fadeInUp" data-wow-delay=".5s">
									<h4 className="title">무료 상담을 시작하시겠습니까? </h4>
									<span className="call-icon">
										<i className="tji-phone"></i>
									</span>
									<Link className="number" href="tel:02-1234-5678">
										<span>02-1234-5678</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 pl-0">
						<div className="h8-funfact-wrapper">
							<div className="countup-item style-2 h8-funfact-item">
								<div className="count-inner">
									<FunfactSingle currentValue={93} symbol={"%"} />
									<div className="counter-desc">
										<h4 className="counter-title">완료된 프로젝트</h4>
										<p className="count-text">
											데이터 기반 인사이트와 혁신적인 접근 방식의 결합을 통해 이루어졌습니다.
										</p>
									</div>
								</div>
							</div>
							<div className="countup-item style-2 h8-funfact-item ">
								<div className="count-inner">
									<FunfactSingle currentValue={8.5} symbol={"X"} />
									<div className="counter-desc">
										<h4 className="counter-title">빠른 성장</h4>
										<p className="count-text">
											데이터 기반 인사이트와 혁신적인 접근 방식의 결합을 통해 이루어졌습니다.
										</p>
									</div>
								</div>
							</div>
							<div className="countup-item style-2 h8-funfact-item">
								<div className="count-inner">
									<FunfactSingle currentValue={100} symbol={"+"} />
									<div className="counter-desc">
										<h4 className="counter-title">수상 경력</h4>
										<p className="count-text">
											데이터 기반 인사이트와 혁신적인 접근 방식의 결합을 통해 이루어졌습니다.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact3;
