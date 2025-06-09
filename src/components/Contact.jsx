import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before proceeding
    if (!validateEmail(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Telegram bot configuration
    const BOT_TOKEN = '7996188369:AAG3wh8HR0yiV2p1mRyf2LrDEoEW7ZE-v8s';
    const CHAT_ID = '1620311557';
    const MESSAGE = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;

    // Send the message via Telegram API
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: MESSAGE,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        } else {
          throw new Error('Failed to send message.');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div
      className="-mt-[6rem] xl:flex-row flex-col-reverse 
      flex gap-6 xs:gap-8 md:gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-4 xs:p-6 md:p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 xs:mt-8 md:mt-10 flex flex-col gap-4 xs:gap-5 md:gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3 xs:mb-4 text-[14px] xs:text-[16px]">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-3 xs:py-4 px-4 xs:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium text-[14px] xs:text-[16px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3 xs:mb-4 text-[14px] xs:text-[16px]">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-3 xs:py-4 px-4 xs:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium text-[14px] xs:text-[16px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3 xs:mb-4 text-[14px] xs:text-[16px]">
              Your Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-3 xs:py-4 px-4 xs:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none text-[14px] xs:text-[16px]"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center gap-2 xs:gap-3 sm:gap-4 
            text-[14px] xs:text-[16px] sm:text-[20px] text-timberWolf 
            font-bold font-beckman items-center py-3 xs:py-4 sm:py-5
            whitespace-nowrap w-[90px] xs:w-[100px] sm:w-[130px] h-[40px] xs:h-[45px] sm:h-[50px] 
            rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn w-[20px] h-[20px] xs:w-[23px] xs:h-[23px] sm:w-[26px] sm:h-[26px] 
              object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');