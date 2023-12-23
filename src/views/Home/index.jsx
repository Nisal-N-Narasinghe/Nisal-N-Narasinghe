import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FlyinInText from "../../utils/Animations/FlyinInText";
import TypingAnimation from "../../utils/Animations/TypingAnimation";

const Home = () => {
  return (
    <div className='bg-black'>
      <Header />
      <div className='grid grid-cols-2 xl:gap-homeBG'>
        <div>
          <div className='text-white text-homeName font-extrabold text-left ml-16 w-96 mt-24 '>
            <FlyinInText textExtraBold='Nisal Nirmitha Narasinghe' />
          </div>
          <div className='text-developertxt text-left ml-16 mt-16 text-homeName font-karla'>
            <FlyinInText textNoraml='I Am' textExtraBold=' a Developer' />
          </div>
          <p className='text-left text-white ml-16'>
            <TypingAnimation
              text=' As an aspiring software engineering student with a solid academic
            background, I am looking for an internship opportunity to develop my
            skills further and gain real-world experience in the field.
            Currently pursuing my undergraduate degree in software engineering,
            I have experience in computer principles and programming languages.
            I have consistently demonstrated my ability to handle challenging
            assignments and meet deadlines during my studies. Additionally, I
            have excellent communication skills and can effectively convey
            technical concepts to both technical and non-technical stakeholders.'
            />
          </p>
        </div>

        <div>
          <img
            src='images/Home/BackgroundImage.png'
            alt='myImage'
            class='w-homeBGImage h-homeBGImage mt-16 ml-16 rounded-3xl'
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
