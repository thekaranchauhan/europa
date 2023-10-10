import { Destinations } from "@/types/destinations";
import Image from "next/image";
import Link from "next/link";

const SingleDestination = ({ destination }: { destination: Destinations }) => {
  const { image, title, link } = destination;
  return (
    <div className="w-full">
      <div className="mt-10 flex h-[150px] w-[200px] items-center justify-center bg-opacity-10 text-primary">
        <Link href={link} passHref={true}>
          <Image
            className="rounded-md"
            src={image}
            width={320}
            height={213}
            alt="title"
          />
        </Link>
      </div>
      <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
    </div>
  );
};

export default SingleDestination;
