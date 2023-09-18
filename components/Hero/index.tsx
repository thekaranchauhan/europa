import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className=" px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Discover Your Path to Excellence with <span className="underline decoration-yellow decoration-8 underline-offset-8">Europa Fusion</span>
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                At Europa Fusion, we understand that your pursuit of higher education is not just a journey; it&lsquo;s a life-changing experience that shapes your future. we are your trusted study abroad consultancy, specializing in European countries as well as leading destinations such as the Canada, USA, Australia, and New Zealand.
                </p>
                <div className="flex flex-col align-center items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="tel: +91 80150 06959"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                  Call Us Now
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/KWRpBBru12HoVqX96"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Visit Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute mt-20 top-20 right-10 z-[-1] opacity-0 lg:opacity-100">
          <Image
            src="/images/hero/students.svg"
            alt="hero"
            width={500}
            height={500}
            />
        </div>
      </section>
    </>
  );
};

export default Hero;
