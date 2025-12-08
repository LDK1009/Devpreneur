import Link from "next/link";

const ContactTop = () => {
  return (
    <div className="tj-contact-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>문의하기
              </span>
              <h2 className="sec-title title-anim">AM 08:00 ~ PM 10:00</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {/* 이메일 */}
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-icon">
                <i className="tji-envelop"></i>
              </div>
              <h3 className="contact-title">이메일</h3>
              <ul className="contact-list">
                <li>
                  <Link href="mailto:devpreneur.ko@gmail.com">devpreneur.ko@gmail.com</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* 카카오톡 1:1 문의 */}
          <Link href="http://pf.kakao.com/_STxjvn">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".9s">
                <div className="contact-icon">
                  <i className="tji-chat"></i>
                </div>
                <h3 className="contact-title">실시간 채팅</h3>
                <ul className="contact-list">
                  <li className="active">카카오톡 1:1 문의</li>
                </ul>
              </div>
            </div>
          </Link>
          {/* 위치 */}
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-icon">
                <i className="tji-location-3"></i>
              </div>
              <h3 className="contact-title">위치</h3>
              <p>서울특별시 강남구 테헤란로 128, 379호</p>
            </div>
          </div>
          {/* 전화번호 */}
          {/* <div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">전화</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:02-1234-5678">02-1234-5678</Link>
								</li>
							</ul>
						</div>
					</div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
