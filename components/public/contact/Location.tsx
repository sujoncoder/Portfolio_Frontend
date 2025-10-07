const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196950.03095743599!2d89.31998916427378!3d23.474901085886597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe55c9b76dc93f%3A0xcab06b14c22acb00!2sMagura%20District!5e0!3m2!1sen!2sbd!4v1712654615220!5m2!1sen!2sbd"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] sm:w-[500px] sm:h-[400px] bg-gray-500 p-2 rounded shadow sm:hover:scale-105 duration-500 mt-10"
      ></iframe>
    </div>
  );
};

export default Location;
