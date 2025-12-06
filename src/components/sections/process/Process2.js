"use client";
import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
	const process = [
		{
			id: 1,
			title: "요구사항 분석 및 기획",
			desc: "프로젝트의 첫 단계로 고객의 고유한 비즈니스 요구사항, 목표, 그리고 해결해야 할 과제를 파악합니다.",
		},
		{
			id: 2,
			title: "개발 및 구현",
			desc: "기획이 완료되면, 전략을 실행으로 옮겨 실제 작동하는 솔루션을 구현하고 배포합니다.",
		},
		{
			id: 3,
			title: "검토 및 지원",
			desc: "프로젝트 완료 후, 목표와 요구사항에 모두 부합하는지 철저히 검토하고 지속적인 지원을 제공합니다.",
		},
	];
	return (
		<section className="h5-working-process section-gap section-gap-x ">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> 작업 프로세스
							</span>
							<h2 className="sec-title text-anim  text-white">
								체계적인 프로세스와 훌륭한 결과
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="h5-working-process-inner">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="working-process-area h5-working-process-wrapper">
								{process?.length
									? process?.map((processSingle, idx) => (
											<ProcessCard2
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
			</div>

			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
			<div className="bg-shape-4">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Process2;
