import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className='bg-black'>
      <Header />
      <div className='grid grid-cols-2 xl:gap-homeBG'>
        <div>
          <h1 className='text-white text-homeName font-extrabold text-left ml-16 w-96 mt-24'>
            Nisal Nirmitha Narasinghe
          </h1>
          <h2 className='text-developertxt text-left ml-16 mt-16 text-homeName font-karla'>
            <span className='font-normal '>I Am</span>{" "}
            <span className='font-extrabold'>a Developer</span>
          </h2>
          <p className='text-left text-white ml-16 '>
            As an aspiring software engineering student with a solid academic
            background, I am looking for an internship opportunity to develop my
            skills further and gain real-world experience in the field.
            Currently pursuing my undergraduate degree in software engineering,
            I have experience in computer principles and programming languages.
            I have consistently demonstrated my ability to handle challenging
            assignments and meet deadlines during my studies. Additionally, I
            have excellent communication skills and can effectively convey
            technical concepts to both technical and non-technical stakeholders.
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
