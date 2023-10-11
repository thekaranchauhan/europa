import Image from "next/image";

const MedicalSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/medical/medical_2.svg"
                alt="medical image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[800px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Streamlined Recruitment Process
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our commitment to excellence extends to our recruitment process. Europa Fusion ensures a smooth and efficient journey for both candidates and healthcare institutions. We leverage cutting-edge technology and a team of dedicated professionals to streamline the recruitment process, minimizing stress and maximizing success.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Cultural Integration Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Relocating to a new country involves more than just a change of workplace. We provide comprehensive support to ensure a smooth transition, including assistance with cultural integration, language support, and access to a network of expatriate professionals.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Commitment to Quality
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Europa Fusion partners with reputable healthcare institutions globally, ensuring that candidates are placed in environments that prioritize patient care, innovation, and professional development. We uphold the highest standards of quality, fostering a culture of excellence in every placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalSectionTwo;
