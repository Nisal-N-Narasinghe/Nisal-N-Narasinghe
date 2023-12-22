import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className='bg-black'>
      <Header />
      <div className='grid grid-cols-2'>
        <div>
          <h1>Home</h1>
        </div>
        <img
          src='images/Home/BackgroundImage.png'
          alt='myImage'
          className='w-homeBGImage max-h-screen justify-self-end mr-8 relative bottom-0 right-0'
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
