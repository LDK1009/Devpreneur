import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<img src="/images/logos/logo-2.png" alt="Logo" />
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<MobileNavbar />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">연락처 정보</h5>
							<div className="contact-info">
								{/* Phone - 주석 처리 */}
								{/* <div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href="tel:8089091313">
										808-909-1313
									</Link>
								</div> */}
								<div className="contact-item">
									<span className="subtitle">이메일</span>
									<Link className="contact-link" href="mailto:devpreneur.ko@gmail.com">
										devpreneur.ko@gmail.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">위치</span>
									<span className="contact-link">
									서울특별시 강남구 테헤란로 128, 379호
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* 팔로우하기 섹션 - 주석 처리 */}
					{/* <div className="hamburger-socials">
						<h5 className="hamburger-title">팔로우하기</h5>
						<div className="social-links style-3">
							<ul>
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
