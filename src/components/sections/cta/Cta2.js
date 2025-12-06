import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta2 = () => {
	return (
		<section className="tj-cta-section h7-cta section-gap-x">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="cta-area h7-cta-inner">
										<div className="cta-content">
											<h2 className="title text-anim">
												지원팀에 문의해보세요
											</h2>
											<div
												className="cta-btn wow fadeInUp"
												data-wow-delay=".6s"
											>
												<ButtonPrimary
													text={"문의하기"}
													url={"/contact"}
													className={"tj-primary-btn-lg"}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Cta2;
