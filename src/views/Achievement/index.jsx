import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/Achievement.css";
import achievementsData from "../../data/AchievmentData";

const Achievements = () => {
  return (
    <div className='bg-black'>
      <Header />

      <h2 className='text-white text-center text-4xl font-extrabold mt-16 certification-img-incoming'>
        Certifications
      </h2>

      <div className='flex justify-center mt-16 mb-16'>
        <div className='flex items-center justify-around max-w-4xl w-full certification-img-incoming'>
          {achievementsData
            .filter((item) => item.category === "Certifications")
            .map((certification, index) => (
              <a
                key={index}
                href={certification.url}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={certification.imageUrl}
                  alt={certification.altText}
                  className='w-48 h-48 rounded-md certification-img '
                />
                <p className='text-white text-center text-sm font-extrabold mt-4 '>
                  {certification.title1}
                </p>
                <p className='text-white text-center text-sm font-extrabold  '>
                  {certification.title2}
                </p>
              </a>
            ))}
        </div>
      </div>

      <h2 className='text-white text-center text-4xl font-extrabold mt-16 github-img '>
        Github Achievements
      </h2>

      <div className='flex justify-center mt-16 mb-16 github-img'>
        <div className='flex items-center justify-around max-w-4xl w-full'>
          {achievementsData
            .filter((item) => item.category === "Github Achievements")
            .map((achievement, index) => (
              <a
                key={index}
                href={achievement.url}
                target='_blank'
                rel='noreferrer'>
                <img
                  src={achievement.imageUrl}
                  alt={achievement.altText}
                  className='w-48 h-48 '
                />
                <p className='text-white text-center text-sm font-extrabold mt-4 '>
                  {achievement.title1}
                </p>
              </a>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Achievements;
