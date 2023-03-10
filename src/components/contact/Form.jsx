import { useState } from "react";

function Form() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e) => {
    let { value } = e.target;
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    setPhone(value);
    if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full p-4">
        <h2 className="text-4xl uppercase font-bold mb-4">get in touch</h2>
        <form
          method="POST"
          action="https://getform.io/f/66dabaf9-eaa3-460c-b7b0-bb0b1a1170c1"
          className="w-full max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm md:text-xl  font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="name"
                placeholder="Jane Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm md:text-xl font-bold mb-2"
                htmlFor="email"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="tel"
                name="phone"
                placeholder="(555) 555-5555"
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <p className="text-red-500 text-sm md:text-xl italic">
                  {phoneError}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm md:text-xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="email"
                name="email"
                placeholder="jane@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm md:text-xl italic">
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm md:text-xl font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="message"
                rows="5"
                placeholder="Enter your message here"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#FFA737] hover:bg-[#bb7a25] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              name="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
