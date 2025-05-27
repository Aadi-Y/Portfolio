import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  function handleProject(event) {
    setProject(event.target.value);
  }
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }
    if (!project) {
      setError("Please describe your project.");
      return;
    }

    const data = { name, email, phone, project };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setLoading(false);
      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setProject("");
        setError("");
        toast.success("Email sent successfully", { autoClose: 3000 });
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send email: ${errorData.error}`, {
          autoClose: 3000,
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);
      toast.error("Unexpected error. Please try again.", { autoClose: 3000 });
    }
  }
  return (
    <>
      <section className="md:h-[75vh] h-auto w-[100vw] bg-black flex md:pb-0 pb-10">
        <section className="xl:w-[70%] lg:w-[85%] w-[95%] m-auto flex flex-col md:gap-3 gap-2">
          <div className="border-amber-500 flex p-2 w-30 rounded-md bg-[#2A2828]">
            <div className="w-1 bg-amber-500 mr-2"></div>
            <h1 className="text-white font-medium">Contact</h1>
          </div>
          <div>
            <p className="text-white text-[.9rem] md:text-[1rem] ">
              Cultivating connections: Reach out and connect with me
            </p>
          </div>
          <div className="flex md:gap-8 gap-2 w-[97%] flex-col md:flex-row">
            <div className="flex flex-col md:gap-5 gap-2 w-[100%]">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md w-[100%] bg-[#2A2828] text-white outline-none focus:border-1 focus:border-amber-500"
                value={name}
                onChange={handleName}
              />
              <input
                type="text"
                placeholder="Email"
                className="p-3 rounded-md bg-[#2A2828] text-white outline-none focus:border-1 focus:border-amber-500"
                value={email}
                onChange={handleEmail}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-md bg-[#2A2828]  text-white outline-none focus:border-1 focus:border-amber-500"
                value={phone}
                onChange={handlePhone}
              />
            </div>
            <div className="w-[100%]">
              <textarea
                placeholder="Project Details"
                className="p-3 rounded-md md:h-[100%] h-40 w-[100%] bg-[#2A2828]  text-white outline-none focus:border-1 focus:border-amber-500"
                value={project}
                onChange={handleProject}
              ></textarea>
            </div>
          </div>
          <div>
            <p className="text-red-500">{error}</p>
          </div>
          <div>
            <button
              className="border px-6 py-2 rounded-xl bg-gradient-to-r from-[#FD6F00] to-[#E46400] outline-none border-none text-white hover:scale-110 cursor-pointer transition-all duration-500"
              onClick={handleSubmit}
            >
              {loading ? "sending..." : "send"}
            </button>
          </div>
        </section>
      </section>
      <ToastContainer/>
    </>
  );
}

export default Contact;
