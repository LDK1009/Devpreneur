import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta = () => {
  return (
    <section className="tj-cta-section" style={{ marginBottom: "0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-area">
              <div className="cta-content" style={{ backgroundColor: "black" }}>
                <h2 className="title title-anim" style={{ fontSize: "60px" }}>
                  아이디어를 현실로,
                  <br />
                  비즈니스를 성장으로.
                </h2>
                <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                  <ButtonPrimary text={"문의하기"} url={"/contact"} className={"btn-dark"} />
                </div>
              </div>
              <div className="cta-img">
                <img src="/images/cta/cta-bg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
