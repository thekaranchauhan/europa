import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Our vision is to revolutionize the study abroad experience by providing holistic support that nurtures your growth, resilience, and global perspective. We aspire to be the bridge that connects your dreams to reality, allowing you to embrace new cultures, engage with diverse communities, and acquire an education that transcends boundaries."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
