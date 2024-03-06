import disney from "@/public/images/viewers-disney.png";
import marvel from "@/public/images/viewers-marvel.png";
import pixar from "@/public/images/viewers-pixar.png";
import starwars from "@/public/images/viewers-starwars.png";
import AutoPlayCardImage from "./AutoPlayCardImage";

function AutoPlayCards() {
  // flex overflow-scroll space-x-4 scrollbar-hide px-5 lg:px-10 py-5
  return (
    <div className="flex justify-between overflow-scroll scrollbar-hide space-x-4 px-5 lg:px-10 py-5">
      <AutoPlayCardImage imageSrc={disney} fileName="disney" />
      <AutoPlayCardImage imageSrc={marvel} fileName="marvel" />
      <AutoPlayCardImage imageSrc={pixar} fileName="pixar" />
      <AutoPlayCardImage imageSrc={starwars} fileName="star-wars" />
    </div>
  );
}

export default AutoPlayCards;
