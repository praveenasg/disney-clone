import { Button } from "./ui/button";

function VideoComponent({
  videoLink,
  onClose,
}: {
  videoLink: string;
  onClose: any;
}) {
  return (
    <div className=" w-full h-full fixed inset-0 flex items-center justify-center ">
      <iframe
        src={`https://www.youtube.com/embed/${videoLink}`}
        allowFullScreen
        className="w-4/5 h-4/5 rounded-lg"
      />
      <Button
        className=" text-1xl absolute top-20 right-20 rounded-md"
        onClick={onClose}
        variant="default"
      >
        close
      </Button>
    </div>
  );
}

export default VideoComponent;
