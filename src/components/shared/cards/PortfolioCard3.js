import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		smallThumbnail = "/images/project/project-6.webp",
		shortDesc,
		id,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item">
			<div className="project-img">
				<Image src={smallThumbnail} alt="" width={434} height={420}/>
			</div>
			<div className="project-content">
				{/* 카테고리 */}
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
				{/* 제목 */}
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
					{/* 짧은 설명 */}
					<div>
						{shortDesc}
					</div>
					{/* 더 보기 버튼 */}
					<Link className="project-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-big"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard3;
