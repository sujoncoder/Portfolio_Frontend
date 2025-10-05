import Image from "next/image";

const ProfileImage = () => {
  return (
    <>
      <Image
        className="hidden sm:block rounded-md object-cover ring-4 ring-slate-700 hover:scale-105 duration-500 bg-slate-800"
        src="https://i.ibb.co.com/JjpyC37M/cartoon-pic.jpg"
        width={150}
        height={150}
        alt="profile image"
      />
    </>
  );
};

export default ProfileImage;
