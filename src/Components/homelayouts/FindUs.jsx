import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-600" />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-sky-500" />,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500" />,
      url: "https://instagram.com",
    },
  ];

  return (
    <div className="">
      <h3 className="font-bold mb-5 ">Find Us On</h3>
      <div className="rounded-box border border-base-300">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-4 hover:bg-base-200 transition ${
              idx < socialLinks.length - 1 ? "border-b border-base-300" : ""
            }`}
          >
            <div className="bg-base-200 rounded-full p-2">{item.icon}</div>
            <span className="text-base text-gray-700">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
