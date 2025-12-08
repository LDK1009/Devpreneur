import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contacts/Contact2";
import Contact3 from "@/components/sections/contacts/Contact3";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Contact() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Contact Us"} text={"Contact Us"} />
						<ContactTop />
						<Contact2 />
						<div style={{ width: "100%", height: "100px" }}></div>
					</main>
					{/* <Footer /> */}
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
