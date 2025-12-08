import Link from "next/link";

const CtaSidebar = () => {
  return (
    <div className="feature-box">
      <div className="feature-content">
        <h2 className="title">문의하기</h2>
        <span>
          AM 08:00 ~ PM 10:00
        </span>
        <Link className="read-more feature-contact" href="mailto:devpreneur.ko@gmail.com">
          <i className="tji-phone-3"></i>
          <span>devpreneur.ko@gmail.com</span>
        </Link>
      </div>
      <div className="feature-images">
        <img src="/images/service/service-ad.png" alt="" />
      </div>
    </div>
  );
};

export default CtaSidebar;
