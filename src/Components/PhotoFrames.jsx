import React from 'react';
import PhotoFrameIMG from '../assets/PhotoFrame/PhotoFrame1.jpg';

const Card = ({ title, description, price }) => (
  <div className='flex flex-col bg-[#FFFBF6] w-auto h-auto rounded-[50px] p-4 items-center text-center justify-center border border-[#c4c4c4]'>
    <img src={PhotoFrameIMG} className="bg-center bg-cover rounded-[40px]" alt="Gift" />
    <div className='mt-4'>
      <h2 className="text-3xl md:text-3xl text-[#693E08] font-bold uppercase">{title}</h2>
      <h2 className="text-xl my-1 md:text-xl text-[#797979]">{description}</h2>
      <h2 className="text-xl md:text-2xl text-[#ED0707] font-bold uppercase">{price}</h2>
    </div>
  </div>
);

const PhotoFrames = () => {
  const cards = [
    { title: 'Gift Box 01', description: 'Description here', price: 'Rs.2,745.50' },
    { title: 'Gift Box 02', description: 'Description here', price: 'Rs.2,999.00' },
    { title: 'Gift Box 03', description: 'Description here', price: 'Rs.3,250.75' },
    { title: 'Gift Box 04', description: 'Description here', price: 'Rs.3,500.00' },
  ];

  return (
    <div className='relative flex flex-col h-auto p-4 bg-white bg-center md:p-10'>
      <div className='flex flex-row items-center justify-between flex-grow p-4 pt-10'>
        <div className='relative justify-center items-center flex flex-grow flex-wrap w-full md:w-[800px]'>
          <h1
            className="absolute top-[-30px] text-5xl md:text-9xl font-bold opacity-60 uppercase select-none"
            style={{
              WebkitTextStroke: '0.5px #693E08',
              color: 'transparent',
            }}
          >
            Photo frames
          </h1>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl text-[#000000] font-bold uppercase">Photo frames</h2>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4'>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrames;
