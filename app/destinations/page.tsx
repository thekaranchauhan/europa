"use client"
import Destinations from "@/components/Destinations";
import Breadcrumb from "@/components/Common/Breadcrumb";

const DestinationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Destinations"
        description="Discover Your Path to Excellence with Europa Fusion."
      />
      <Destinations />
    </>
  );
}

export default DestinationsPage;

