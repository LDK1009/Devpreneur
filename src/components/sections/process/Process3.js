"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard3 from "@/components/shared/cards/ProcessCard3";
import { useCallback, useState } from "react";

const Process3 = () => {
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
	const [currentIndex, setCurrentIndex] = useState(2);
	const handleCurrentIndex = useCallback(idx => {
		setCurrentIndex(idx);
	}, []);
	return (
		<section className="h6-working-process section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-2 order-lg-1">
						<div className="h6-working-process-inner">
							<div className="h6-working-process-wrapper">
								{process?.length
									? process?.map((processSingle, idx) => (
											<ProcessCard3
												key={idx}
												processSingle={processSingle}
												idx={idx}
												currentIndex={currentIndex}
												handleCurrentIndex={handleCurrentIndex}
											/>
									  ))
									: ""}
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-1 order-lg-2">
						<div className="content-wrap slidebar-stickiy">
							<div className="sec-heading style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>작업 프로세스
								</span>
								<h2 className="sec-title title-anim">
									체계적인 프로세스와 훌륭한 결과
								</h2>
							</div>
							<p className="desc">
								최첨단 기술과 전략을 활용하여 경쟁력을 유지합니다
							</p>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay=".6s"
							>
								<ButtonPrimary text={"문의하기"} url={"/contact"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process3;
