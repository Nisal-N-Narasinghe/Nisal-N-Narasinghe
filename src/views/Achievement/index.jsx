import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/Achievement.css";

const Achievements = () => {
  return (
    <div>
      <Header />
      <div className='text-white text-center   mt-40 mb-16'>
        <img
          src='UnderConstruction.png'
          alt='Under Construction'
          className='mx-auto spinning-image'
        />
        <h1 className='text-white text-center mb-40 '>Under Construction</h1>
      </div>
      <Footer />
    </div>
  );
};
export default Achievements;
