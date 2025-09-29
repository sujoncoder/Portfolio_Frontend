import Image from "next/image";


const ProfileImage = () => {
  return (
    <>
      <Image
        className="hidden md:block rounded-md object-cover ring-4 ring-slate-700 hover:scale-105 duration-500 bg-slate-800"
        src="https://i.ibb.co.com/pvTd08sn/Whats-App-Image-2025-07-28-at-19-35-44-2066225f.jpg"
        width={150}
        height={150}
        alt="profile image"
      />
    </>
  );
};

export default ProfileImage;
