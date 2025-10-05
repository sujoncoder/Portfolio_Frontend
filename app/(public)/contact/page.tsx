import ContactIconLink from "@/components/public/contact/ContactIconLink";
import ContactText from "@/components/public/contact/ContactText";
import Location from "@/components/public/contact/Location";
import Footer from "@/components/public/Footer/Footer";


const Contact = () => {
  return (
    <>
      <div className="flex flex-col sm:space-x-10 sm:flex-row sm:justify-between my-0 sm:my-20">
        <div className="space-y-10">
          <ContactText />
          <ContactIconLink />
        </div>

        <Location />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
