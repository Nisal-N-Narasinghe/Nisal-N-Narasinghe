import TypingAnimation from "../../utils/Animations/TypingAnimation";

const Footer = () => {
  return (
    <footer>
      <div className='text-center'>
        <hr className='border-t-2 border-gray-300 w-80 mx-auto' />
        <div className='text-white text-footer'>
          <TypingAnimation text='Since 2000' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
