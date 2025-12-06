import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import Features from "@/components/sections/features/Features";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/hero/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Choose from "@/components/sections/choose/Choose";
import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import Process from "@/components/sections/process/Process";
import History1 from "@/components/sections/history/History1";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Funfact3 from "@/components/sections/funfacts/Funfact3";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            {/* 메인 히어로 섹션 - 첫 화면 메인 배너 */}
            <Hero />

            {/* 왜 선택해야 하는지 설명하는 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Choose />

            {/* 주요 기능 및 특징 소개 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Features />

            {/* ------------------------------------- */}
			
            {/* 통계 및 성과 지표 표시 섹션 */}
            <h1>Funfact</h1>
            <Funfact2 />

            {/* 마퀴 슬라이더 - 로고나 텍스트가 흐르는 애니메이션 */}
            <h1>MarqueeSlider</h1>
            <MarqueeSlider1 />

            {/* 포트폴리오 프로젝트 목록 섹션 */}
            <h1>Portfolios</h1>
            <Portfolios1 />

            {/* 작업 프로세스 설명 섹션 */}
            <h1>Process</h1>
            <Process />

            {/* 제공 서비스 목록 및 소개 섹션 */}
            <h1>Services</h1>
            <Services1 />

            {/* 고객 후기 및 추천사 섹션 */}
            <h1>Testimonials</h1>
            <Testimonials1 />

            {/* 행동 유도(Call to Action) 섹션 - 문의 유도 */}
            <h1>Cta</h1>
            <Cta />

            {/* 연락처 및 문의 폼 섹션 */}
            <h1>Contact</h1>
            <Contact2 />
            {/* <HeaderSpace />
						<Hero5 />
						<Features2 />
						<Brands1 />
						<About1 />
						<Services1 />
						<Portfolios1 />
						<Funfact1 />
						<Testimonials1 />
						<Faq2 type={1} />
						<Contact2 />
						<Blogs1 />
						<Cta /> */}
          </main>
          <Footer />
        </div>
      </div>

      <ClientWrapper />
    </div>
  );
}
