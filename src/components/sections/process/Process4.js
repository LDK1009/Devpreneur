import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard4 from "@/components/shared/cards/ProcessCard4";

const Process4 = () => {
	const process = [
		{
			id: 1,
			iconName: "tji-growth",
			title: "요구사항 분석 및 기획",
			desc: "프로젝트의 첫 단계로 고객의 고유한 비즈니스 요구사항, 목표, 그리고 해결해야 할 과제를 파악합니다.",
		},
		{
			id: 2,
			iconName: "tji-worldwide",
			title: "개발 및 구현",
			desc: "기획이 완료되면, 전략을 실행으로 옮겨 실제 작동하는 솔루션을 구현하고 배포합니다.",
		},
		{
			id: 3,
			title: "검토 및 지원",
			iconName: "tji-complete",
			desc: "프로젝트 완료 후, 목표와 요구사항에 모두 부합하는지 철저히 검토하고 지속적인 지원을 제공합니다.",
		},
	];

	return (
		<section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-5">
						<div className="sec-heading style-3 tj-sticky-panel-3">
							<span className="sub-title">
								<i className="tji-box"></i> 작업 프로세스
							</span>
							<h2 className="sec-title text-anim">
								체계적인 프로세스와 훌륭한 결과
							</h2>
							<div className="h10-process-more">
								<ButtonPrimary text={"더 알아보기"} url={"/about"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 ">
						<div className="h10-process-wrapper">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard4
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Process4;
