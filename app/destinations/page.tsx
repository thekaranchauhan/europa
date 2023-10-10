"use client"
import Destinations from "@/components/Destinations";
import Breadcrumb from "@/components/Common/Breadcrumb";

const DestinationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Destinations"
        description="Destination that suits your needs, studies and future."
      />
      <Destinations />
    </>
  );
}

export default DestinationsPage;

