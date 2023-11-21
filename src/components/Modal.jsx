import ReactDom from "react-dom";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = () => {
  const { setIsModalOpen } = useGlobalContext();
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDom.createPortal(
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="modal-outer"
        ></div>
        <motion.div className="modal" variants={modal}>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </button>
          Hello everyone.
          <br />
          This is my weather project. I used apis from weatherapi.com and they
          give only 3 days free of weather forecast information. Also, some
          photos (from unsplash.com) might have bad quality, but I tried my best
          to make all looks almost good enough. So please, check the weather in
          your city and if it`s raining take an umbrella with you!
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.querySelector(".modal-container")
  );
};
export default Modal;
