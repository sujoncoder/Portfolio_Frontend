import Image from "next/image";
import CertificateCard from "./CertificateCard";
import certificates from "@/data/certificatesDB";
import { ICertificates } from "@/types";


const Certificates = () => {
  return (
    <section>
      <div className="flex justify-center items-center space-x-4 py-6 sm:py-12">
        <Image
          src="/assets/icons / certificate.png"
          width={50}
          height={50}
          alt="voice"
          className="animate-pulse"
        />
        <span className="text-lg sm:text-3xl font-semibold text-slate-100">
          Achievements
          <span className="text-[#5cc48a]"> and </span>
          Honors
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate: ICertificates) => (
          <CertificateCard
            key={certificate.course}
            institute={certificate.institute}
            course={certificate.course}
            image={certificate.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
