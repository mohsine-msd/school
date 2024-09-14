import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";



export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01385b47-c096-4272-8819-cf22a45eb754");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form");
    }
  };

  return (
     <div className="flex flex-col md:flex-row p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="md:w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Send a message</h2>
        <p className="mb-6 text-gray-600">
          We welcome you to reach out via our contact form or use the
          information below to get in touch with us. Your feedback, questions,
          and suggestions are invaluable as we work to deliver outstanding
          service to our university community.
        </p>
        <div className="space-y-4">
          <p className="flex items-center text-gray-700">
            <MdEmail className="mr-2 text-blue-600" />
            mrmessoudimouhcine@gmail.com
          </p>
          <p className="flex items-center text-gray-700">
            <FaPhone className="mr-2 text-blue-600" />
            +212 612820865
          </p>
          <p className="flex items-center text-gray-700">
            <SiGooglemaps className="mr-2 text-blue-600" />
            Casablanca Oulfa Zoubir
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2   focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Form
          </button>
        </form>
        <span className="block mt-4 text-gray-600">{result}</span>
      </div>
    </div>
  );
}
