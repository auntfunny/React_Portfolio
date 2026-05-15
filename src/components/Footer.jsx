import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center min-h-200 lg:min-h-160 bg-acc1">
      <section
        id="contact"
        className="flex flex-col lg:flex-row justify-evenly items-center gap-8 w-3/4 h-170 lg:h-120 bg-acc4 inset-shadow-sm/80 rounded-2xl"
      >
        <div className="text-center p-3">
          <h3 className="text-5xl md:text-7xl lg:text-8xl text-acc3 p-6">
            Let's Talk!
          </h3>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-400 p-6">
            Send me a message and we'll chat
          </p>
        </div>
        <form
          id="sendEmail"
          className="flex flex-col justify-evenly items-center w-3/4 lg:w-1/2 h-4/5"
        >
          <input
            required
            type="text"
            name="nameOfSender"
            id="nameOfSender"
            placeholder="Your name"
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <input
            required
            type="email"
            name="emailOfSender"
            id="emailOfSender"
            placeholder="Your email"
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <input
            required
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <textarea
            required
            name="message"
            id="message"
            placeholder="What's on your mind?"
            className="bg-gray-300 p-3 w-7/8 h-3/5 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          ></textarea>
          <br />
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <button
              type="submit"
              id="formButton"
              className="flex justify-center items-center w-7/8 px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-lg hover:cursor-pointer hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >
              Send message
            </button>
            <p id="statusMessage" className="text-acc3"></p>
          </div>
        </form>
      </section>
      <a
        href="#home"
        className="w-3/4 py-3 bg-transparent border border-acc4 text-acc4 lg:border-acc2 lg:text-acc2 lg:hover:text-acc4 lg:hover:border-acc4 transition-colors duration-150 text-center rounded-xl"
      >
        Back to Top
      </a>
    </footer>
  );
};

export default Footer;
