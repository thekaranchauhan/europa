import Breadcrumb from "@/components/Common/Breadcrumb";
import Privacy from "@/components/Terms/privacy";

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description='Europa Fusion Private Limited ("we," "us," or "our") is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you interact with our study abroad consultancy website (the "Website"). By accessing or using our website, you consent to the practices described in this Privacy Policy.'
      />
      <Privacy />
    </>
  );
};

export default PrivacyPolicy;
