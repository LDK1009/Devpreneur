import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import ProgressBar from "@/components/shared/progress/ProgressBar";
const Funfact2 = () => {
  return (
    <section className="tj-funfact-section section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-wrap-content">
              <div className="sec-heading style-4">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>성과 지표
                </span>
                <h2 className="sec-title title-anim">
                  함께 만든 성장 기록,
                  <br />
                  고객과의 성과입니다.
                </h2>
              </div>
              <div className="progress-item">
                <div className="progress-circle">
                  <ProgressBar />
                </div>
                <div className="progress-text">
                  <span className="sub-title">
                    지난 6개월간
                    <br /> 재계약 비율
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          <div className="col-lg-4 col-md-6">
            <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".7s">
              <span className="count-icon">
                <i className="tji-growth"></i>
              </span>
              <span className="steps">01.</span>
              <div className="count-inner">
                <span className="count-text">매출 증가</span>
                <FunfactSingle currentValue={400} symbol={"%"} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".5s">
              <span className="count-icon">
                <i className="tji-box"></i>
              </span>
              <span className="steps">02.</span>
              <div className="count-inner">
                <span className="count-text">프로젝트 수</span>
                <FunfactSingle currentValue={20} symbol={"+"} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
              <span className="count-icon">
                <i className="tji-complete"></i>
              </span>
              <span className="steps">03.</span>
              <div className="count-inner">
                <span className="count-text">프로젝트 성공률</span>
                <FunfactSingle currentValue={100} symbol={"%"} />
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
    </section>
  );
};

export default Funfact2;
