import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";
const Portfolios1 = () => {
  const portfolio = getPortfolio()?.slice(0, 4);
  return (
    <section className="tj-project-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>포트폴리오
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading">
                  <h2 className="sec-title title-anim">
                    아이디어를 <span>현실로,</span><br/>비즈니스를 <span>성장으로.</span>
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                  고객과 밀접하게 협력하여 고유한 요구사항을 이해하고 과제를 해결하는 맞춤형 솔루션을 제작합니다.
                </p>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                  <ButtonPrimary text={"더보기"} url="/portfolios" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="project-area tj-arrange-container">
              {portfolio?.length
                ? portfolio?.map((portfolioSingle, idx) => <PortfolioCard1 key={idx} portfolio={portfolioSingle} />)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios1;
