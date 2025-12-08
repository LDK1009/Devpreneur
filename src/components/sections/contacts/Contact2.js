"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact2 = () => {
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("0");
  const [serviceDescription, setServiceDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypeOptions = [
    { value: "0", optionName: "문의 유형을 선택하세요" },
    { value: "1", optionName: "웹 개발" },
    { value: "2", optionName: "앱 개발" },
    { value: "3", optionName: "유지보수" },
  ];

  const handleSelect = (option) => {
    setServiceType(option.value);
  };

  // 유효성 검사
  function validateForm() {
    if (!email || !email.includes("@")) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return false;
    }
    if (serviceType === "0") {
      alert("문의 유형을 선택해주세요.");
      return false;
    }
    if (!serviceDescription.trim()) {
      alert("문의 내용을 입력해주세요.");
      return false;
    }
    return true;
  }

  // 폼 초기화
  function clearForm() {
    setEmail("");
    setServiceType("0");
    setServiceDescription("");
  }

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 유효성 검사
    if (!validateForm()) {
      return;
    }

    // 제출 중 상태 설정
    setIsSubmitting(true);

    try {
      const selectedServiceType = serviceTypeOptions.find((option) => option.value === serviceType);

      // EmailJS 설정값 (환경 변수 또는 직접 입력)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // EmailJS로 이메일 발송
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "devpreneur.ko@gmail.com",
          from_email: email,
          service_type: selectedServiceType?.optionName || "선택 안됨",
          message: serviceDescription,
          reply_to: email,
        },
        publicKey
      );

      alert("문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
      // 폼 초기화
      clearForm();
    } catch (error) {
      console.error("문의 접수 오류:", error);
      alert("문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="tj-contact-section section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="global-map wow fadeInUp" data-wow-delay=".3s">
              <div className="global-map-img">
                <img src="/images/bg/map.svg" alt="Image" />
                <div className="location-indicator loc-1">
                  <div className="location-tooltip">
                    <span>본사:</span>
                    <p>서울특별시 강남구 테헤란로 128, 379호</p>
                    <Link href="mailto:devpreneur.ko@gmail.com">E: devpreneur.ko@gmail.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form style-2 wow fadeInUp" data-wow-delay=".4s">
              <div className="sec-heading">
                <span className="sub-title text-white">
                  <i className="tji-box"></i>제작 문의
                </span>
                <h2 className="sec-title title-anim">지금 바로 상담해 보세요.</h2>
              </div>
              <form id="contact-form-2" onSubmit={handleSubmit}>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                  {/* 이메일 */}
                  <div className="col-sm-12">
                    <div className="form-input">
                      <input
                        type="email"
                        name="cfEmail2"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* 서비스 유형 */}
                  <div className="col-sm-12">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <ReactNiceSelect
                            selectedIndex={serviceType}
                            value={serviceType}
                            options={serviceTypeOptions}
                            getSelectedOption={handleSelect}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 서비스 설명 */}
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea
                        name="cfMessage2"
                        id="message"
                        placeholder="어떤 서비스를 제작하고 싶으신가요? (예: 예약 시스템, 쇼핑몰 등)"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {/* 전송 버튼 */}
                  <div className="submit-btn">
                    <ButtonPrimary
                      text={isSubmitting ? "전송 중..." : "상담 신청"}
                      type={"submit"}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
    </section>
  );
};

export default Contact2;
