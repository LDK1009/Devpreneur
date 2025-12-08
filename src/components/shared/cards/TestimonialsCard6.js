import Image from "next/image";

const TestimonialsCard6 = ({ testimonial }) => {
	const {
		contactRoute,
		authorName,
		desc,
		img = "/images/testimonial/client-1.png",
	} = testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<div className="testimonial-author">
				<div className="author-inner">
					<div className="author-img">
						<Image
							src={img}
							alt="Images"
							width={89}
							height={89}
							style={{ height: "auto" }}
						/>
					</div>
					<div className="author-header">
						<h4 className="title">{contactRoute}</h4>
						<span className="designation">{authorName}</span>
					</div>
				</div>
			</div>
			<div className="desc">
				<p>{desc}</p>
			</div>
			<div
				className="star-ratings"
				style={{ width: "100%", textAlign: "center" }}
			>
				<div className="fill-ratings" style={{ width: "100%" }}>
					<span>★★★★★</span>
				</div>
				<div className="empty-ratings">
					<span>★★★★★</span>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard6;
