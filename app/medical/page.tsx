import MedicalSectionOne from "@/components/Medical/MedicalSectionOne";
import MedicalSectionTwo from "@/components/Medical/MedicalSectionTwo";
import MedicalContact from "@/components/MedicalContact";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Medical Recruitment"
        description="Europa Fusion recognizes that talent should be unrestricted and that healthcare transcends national boundaries. We are your go-to place for opening up a world of international job opportunities in the medical and nursing industries. Our goal is to establish a seamless link between qualified healthcare professionals and opportunities abroad, building a global network of superior patient care."
      />
      <MedicalSectionOne />
      <MedicalSectionTwo />
      <MedicalContact />
    </>
  );
};

export default AboutPage;
