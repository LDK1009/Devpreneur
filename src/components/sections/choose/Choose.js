const Choose = () => {
  return (
    <section id="choose" className="tj-choose-section h8-choose  section-gap-x">
      <div className="container-fluid gap-0">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 align-self-stretch">
            <div className="h8-choose-banner">
              <video style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay loop muted playsInline>
                <source src="/video/choose-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="h8-choose-content-wrapper">
              <div className="sec-heading style-3">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>왜 Devpreneur와 함께해야 할까요?
                </span>
                <h2 className="sec-title title-anim">
                  고객님의 비즈니스와
                  <br />
                  함께 성장합니다.
                </h2>
              </div>
              <div className="h8-choose-box-wrapper ">
                <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".3s">
                  <div className="choose-content">
                    <div className="choose-icon">
                      <i className="tji-innovative"></i>
                    </div>
                    <div>
                      <h4 className="title">빠른 서비스화</h4>
                      <p className="desc">
                        완성도 높은 최신 스택 활용 개발을 통해
                        <br /> 초기 시장 검증을 누구보다 빠르게 합니다
                      </p>
                    </div>
                  </div>
                </div>
                <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".4s">
                  <div className="choose-content">
                    <div className="choose-icon">
                      <i className="tji-award"></i>
                    </div>
                    <div>
                      <h4 className="title">합리적 비용 구조</h4>
                      <p className="desc">
                        서버리스 기술 기반으로 비용을 줄이고
                        <br />
                        핵심 기능에만 집중해 예산을 살립니다
                      </p>
                    </div>
                  </div>
                </div>
                <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".5s">
                  <div className="choose-content">
                    <div className="choose-icon">
                      <i className="tji-support"></i>
                    </div>
                    <div>
                      <h4 className="title">원활한 의사소통</h4>
                      <p className="desc">
                        개발자와 직접 논의하며 즉시 반영하여
                        <br /> 요구사항 전달로 인한 손실을 줄입니다{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
    </section>
  );
};

export default Choose;
