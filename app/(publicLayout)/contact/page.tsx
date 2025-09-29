import Footer from "@/components/Footer/Footer";
import ContactIconLink from "@/components/contact/ContactIconLink";
import ContactText from "@/components/contact/ContactText";
import Location from "@/components/contact/Location";

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
