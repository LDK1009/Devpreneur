"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
const PortfolioDetailsPrimary = ({ option }) => {
  const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
  const { title, category, thumbnail, shortDesc, desc, featuredDesc, features } = currentItem || {};
  const { clients, budget, location, completeDate } = currentItem?.projectInfo || {};
  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        <div className="row rg-50">
          <div className="col-lg-8">
            <div className="post-details-wrapper">
              <div className="blog-images wow fadeInUp" data-wow-delay=".1s">
                <Image
                  src={thumbnail}
                  alt="Images"
                  width={868}
                  height={450}
                  style={{ height: "auto" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "end", gap: "16px" }}>
                {/* 제목 */}
                <h2 className="title title-anim">{title}</h2>
                {/* 짧은 설명 */}
                <p className="wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: "20px", color: "#777" }}>
                  {shortDesc}
                </p>
              </div>

              <div className="blog-text">
                {/* 상세 설명 */}
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {desc}
                </p>
                {/* 주요 기능 */}
                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                  주요 기능
                </h3>
                {/* 주요 기능 설명 */}
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {featuredDesc}
                </p>
                {/* 주요 기능 목록 */}
                <ul className="wow fadeInUp" data-wow-delay=".3s">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <span>
                        <i className="tji-check"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* 갤러리 */}
                {/* <h3 className="wow fadeInUp" data-wow-delay=".3s">
									Project Galley
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our Rebranding Strategy for [Client Name] transformed their
									entire brand identity, from a fresh new logo to an updated
									visual design that resonates with their growing audience.
								</p>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-12">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href="/images/project/project-gallery-1.webp"
													>
														<Image
															src="/images/project/project-gallery-1.webp"
															alt="Image"
															width={870}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href="/images/project/project-gallery-2.webp"
													>
														<Image
															src="/images/project/project-gallery-2.webp"
															alt="Image"
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".5s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href="/images/project/project-gallery-3.webp"
													>
														<Image
															src="/images/project/project-gallery-3.webp"
															alt="Image"
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
									</div>
								</div> */}
              </div>
              <div className="tj-post__navigation mb-0 wow fadeInUp" data-wow-delay="0.3s">
                {/* <!-- previous post --> */}
                <div className="tj-nav__post previous" style={{ visibility: isPrevItem ? "visible" : "hidden" }}>
                  <div className="tj-nav-post__nav prev_post">
                    <Link href={isPrevItem ? `/portfolios/${prevId}` : "#"}>
                      <span>
                        <i className="tji-arrow-left"></i>
                      </span>
                      Previous
                    </Link>
                  </div>
                </div>
                <Link href={"/portfolios"} className="tj-nav-post__grid">
                  <i className="tji-window"></i>
                </Link>
                {/* <!-- next post --> */}
                <div className="tj-nav__post next" style={{ visibility: isNextItem ? "visible" : "hidden" }}>
                  <div className="tj-nav-post__nav next_post">
                    <Link href={isNextItem ? `/portfolios/${nextId}` : "#"}>
                      Next
                      <span>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="tj-main-sidebar">
              {/* <!-- category --> */}
              <div className="tj-sidebar-widget widget-categories wow fadeInUp" data-wow-delay=".1s">
                <h4 className="widget-title">Project Info</h4>
                <div className="infos-item">
                  <div className="project-icons">
                    <i className="tji-user"></i>
                  </div>
                  <div className="project-text">
                    <span>클라이언트</span>
                    <h6 className="title">{clients}</h6>
                  </div>
                </div>
                <div className="infos-item">
                  <div className="project-icons">
                    <i className="tji-budget"></i>
                  </div>
                  <div className="project-text">
                    <span>예산</span>
                    <h6 className="title">{budget}</h6>
                  </div>
                </div>
                <div className="infos-item">
                  <div className="project-icons">
                    <i className="tji-location-2"></i>
                  </div>
                  <div className="project-text">
                    <span>위치</span>
                    <h6 className="title">{location}</h6>
                  </div>
                </div>
                <div className="infos-item">
                  <div className="project-icons">
                    <i className="tji-chart"></i>
                  </div>
                  <div className="project-text">
                    <span>카테고리</span>
                    <h6 className="title">{category}</h6>
                  </div>
                </div>
                <div className="infos-item">
                  <div className="project-icons">
                    <i className="tji-calendar"></i>
                  </div>
                  <div className="project-text">
                    <span>완료일</span>
                    <h6 className="title">{completeDate}</h6>
                  </div>
                </div>
              </div>
              {/* <!-- cta --> */}
              <div className="tj-sidebar-widget widget-feature-item wow fadeInUp" data-wow-delay=".3s">
                <CtaSidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailsPrimary;
