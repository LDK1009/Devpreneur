import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Choose from "@/components/sections/choose/Choose";
import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import Process from "@/components/sections/process/Process";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Testimonials7 from "@/components/sections/testimonials/Testimonials7";

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

            {/* 제공 서비스 목록 및 소개 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Services1 />

            {/* 작업 프로세스 설명 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Process />

            {/* 성과지표 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Funfact2 />

            {/* 마퀴 슬라이더 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <MarqueeSlider1 />

            {/* 포트폴리오 프로젝트 목록 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Portfolios1 />

            {/* 고객 후기 및 추천사 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
            <Testimonials7 />

            {/* 연락처 및 문의 폼 섹션 */}
            <div style={{ marginBottom: "100px" }}></div>
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
