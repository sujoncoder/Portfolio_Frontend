import Image from "next/image";


const DeveloperImage = () => {
  return (
    <>
      <Image
        src="https://i.ibb.co.com/SX5K5PSW/pic.png"
        width={500}
        height={500}
        alt="person image"
        className="w-full object-cover md:w-[300px] md:h-[300px] rounded-md grayscale hover:grayscale-0 duration-300 shadow mt-10 md:mt-0 cursor-pointer"
      />
    </>
  );
};

export default DeveloperImage;
