import Image, { StaticImageData } from "next/image";
import { list } from "@vercel/blob";

async function AutoPlayCardImage({
  imageSrc,
  fileName,
}: {
  imageSrc: StaticImageData;
  fileName: string;
}) {
  //   const fileName = "marvel";
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];
  return (
    <div className="group border-2 border-white relative border-r-2 flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lgs rounded-lg">
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center relative z-10"
        src={imageSrc}
        alt="disney"
        width={1920}
        height={1080}
      />
      <video
        autoPlay
        muted
        loop
        // className="w-full h-full absolute opacity-40 top-0 z-10 rounded-lg"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default AutoPlayCardImage;
