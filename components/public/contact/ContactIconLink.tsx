import Image from "next/image";


const ContactIconLink = () => {
  return (
    <section className="space-y-4">
      <div>
        <a
          className="flex space-x-2 justify-start items-center"
          href="mailto: sujonsheikh.dev.com"
        >
          <Image
            src="/assets/icons/social/gmail.png"
            width={40}
            height={40}
            alt="mail"
            className="hover:scale-125 cursor-pointer transition duration-700"
          />
          <p className="flex text-lg items-center font-mono hover:text-[#5cc48a] duration-300 text-slate-200">
            sujonsheikh.dev@gmail.com
            <span className="hidden sm:block pl-2 text-sm text-slate-500">
              (Recommended)
            </span>
          </p>
        </a>
      </div>

      <div>
        <a
          className="flex space-x-2 justify-start items-center"
          href="https://wa.me/01999986919"
          target="_blank"
        >
          <Image
            src="/assets/icons/social/whatsapp.png"
            width={40}
            height={40}
            alt="whatsapp"
            className="hover:scale-125 cursor-pointer transition duration-700"
          />
          <p className="flex items-center text-lg font-mono text-slate-200 hover:text-[#5cc48a] duration-300">
            +880 1999-986919
            <span className="hidden pl-2 sm:block text-sm text-slate-500">
              (Best Recommended)
            </span>
          </p>
        </a>
      </div>

      <div>
        <a className="flex space-x-2 justify-start items-center">
          <Image
            src="/assets/icons/house.png"
            width={40}
            height={40}
            alt="home"
            className="hover:scale-125 cursor-pointer transition duration-700"
          />
          <p className="text-lg font-mono text-slate-200">
            Magura Sadar, Magura.
          </p>
        </a>
      </div>
    </section>
  );
};

export default ContactIconLink;
