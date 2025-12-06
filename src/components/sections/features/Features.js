import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
  const features = [
    {
      title: "기획",
      desc: "사용자 요구와 시장 흐름을 분석하여 비즈니스 목표 달성을 위한 전략적 방향을 제시합니다.",
      icon: "bi bi-clipboard-data",
    },
    {
      title: "디자인",
      desc: "브랜드 정체성을 반영한 UI/UX로 사용자가 더 쉽고 편리하게 서비스에 몰입할 수 있도록 설계합니다.",
      icon: "bi bi-palette",
    },
    {
      title: "개발",
      desc: "최신 웹·모바일 기술을 활용해 아이디어를 빠르고 안정적으로 구현하여 비즈니스 성장을 지원합니다.",
      icon: "bi bi-code-slash",
    },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {type == 2 ? (
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>무엇을 제공하나요?
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      기획부터 개발까지,
                      <br />전 과정을 <span>책임</span>집니다.
                    </h2>
                  </div>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <ButtonPrimary text="문의하기" url="/contact" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>무엇을 제공하나요?
                </span>
                <h2 className="sec-title title-anim">
                  기획부터 개발까지,
                  <br />전 과정을 <span>책임</span>집니다.
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-4">
              <FeatureCard feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
