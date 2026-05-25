import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../context/ScrollContext";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { sectionRefs } = useScroll();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    message: "",
    title: "",
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  emailjs.init({ publicKey: "W02jWj1PPR-ybgsFu" });

  function sendTheEmail(event) {
    event.preventDefault();
    setLoading(true);
    setForm({...form, time: new Date().toString()})
    try {
      emailjs.send("service_my_page", "template_5q88fyt", form);
      console.log("SUCCESS!");
      setStatus(t('footer.form.messages.success'));
      setForm({
        message: "",
        title: "",
        name: "",
        email: "",
      });
    } catch (error) {
      console.log("FAILED...", error.text);
      setStatus(t('footer.form.messages.failed'));
    } finally {
      setLoading(false);
    }
  }

  const inputData = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <footer className="flex flex-col gap-4 justify-center items-center min-h-200 lg:min-h-160 bg-acc1">
      <section
        id="contact"
        ref={(el) => (sectionRefs.current[3] = el)}
        className="flex flex-col lg:flex-row justify-evenly items-center gap-8 w-3/4 h-170 lg:h-120 bg-acc4 inset-shadow-sm/80 rounded-2xl"
      >
        <div className="text-center p-3">
          <h3 className="text-5xl md:text-7xl lg:text-8xl text-acc3 p-6">
            {t('footer.label.title')}
          </h3>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-400 p-6">
            {t('footer.label.message')}
          </p>
        </div>
        <form
          onSubmit={sendTheEmail}
          id="sendEmail"
          className="flex flex-col justify-evenly items-center w-3/4 lg:w-1/2 h-4/5"
        >
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder={t('footer.form.placeholders.name')}
            onChange={inputData}
            value={form.name}
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder={t('footer.form.placeholders.email')}
            onChange={inputData}
            value={form.email}
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <input
            required
            type="text"
            name="title"
            id="title"
            placeholder={t('footer.form.placeholders.title')}
            onChange={inputData}
            value={form.title}
            className="bg-gray-300 p-3 w-7/8 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          />
          <br />
          <textarea
            required
            name="message"
            id="message"
            placeholder={t('footer.form.placeholders.message')}
            onChange={inputData}
            value={form.message}
            className="bg-gray-300 p-3 w-7/8 h-3/5 rounded-lg border-2 border-gray-500 focus:bg-white focus:outline-none focus:border-2 focus:border-acc3 focus:shadow-md focus:shadow-acc3"
          ></textarea>
          <br />
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <button
              type="submit"
              id="formButton"
              className={`flex justify-center items-center w-7/8 px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-lg ${loading ? "cursor-wait" : "hover:cursor-pointer hover:bg-acc4 hover:text-acc3"} active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out`}
            >
              {loading ? (
          <div class="w-6 h-6 rounded-full border-3 border-acc4 border-t-acc1 animate-spin"></div>
        ) : (
          t('footer.form.button')
        )}
            </button>
            <p className="text-acc3">{status}</p>
          </div>
        </form>
      </section>
      <button
        type="button"
        onClick={() => scrollTo(0, 0)}
        className={`w-3/4 py-3 bg-transparent border border-acc4/80 text-acc4/80 lg:border-acc3/60 lg:text-acc3/60 transition-colors duration-150 text-center rounded-xl lg:hover:text-acc4/80 lg:hover:border-acc4/80 cursor-pointer`}
      >
        {t('footer.top')}
      </button>
    </footer>
  );
};

export default Footer;
