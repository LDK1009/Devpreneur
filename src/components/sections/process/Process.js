"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
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
    <section className="tj-working-process section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                작업 프로세스
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-2">
                  <h2 className="sec-title text-anim">
                    체계적인 <span>프로세스,</span>
                    <br />
                    훌륭한 <span>결과.</span>
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                  고객 만족도와 신뢰도를 높이기 위한
                  <br /> 맞춤형 개발 프로세스를 제공합니다.
                </p>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                  <ButtonPrimary text={"문의하기"} url={"/contact"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="working-process-area">
              {process?.length
                ? process?.map((processSingle, idx) => (
                    <ProcessCard key={idx} processSingle={processSingle} idx={idx} />
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
    </section>
  );
};

export default Process;
