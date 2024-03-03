import Image from 'next/image';
import Navbar from '../components/Navbar';

const Carousel = () => {
  return (
    <>
      <Navbar />
      <div className="carousel w-full">
        {/* Example Slide */}
        <div id="slide1" className="carousel-item relative w-full">
          <Image src="/certs/Coursera INSEAD 4 Courses Blockchain Revolution.jpg" alt="Certificate 1" layout="fill" objectFit="cover" />
          {/* Carousel Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Navigation buttons */}
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src="/certs/Coursera Duke 4 Courses Decentralized Finance (DeFi): The Future of Finance.jpg" alt="Certificate 2" layout="fill" objectFit="cover" />
          {/* Carousel Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Navigation buttons */}
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src="/certs/Dapp University Blockchain Developer Bootcamp Truffle.jpg" alt="Certificate 3" layout="fill" objectFit="cover" />
          {/* Carousel Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Navigation buttons */}
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src="/certs/udemy Blockchain Developer Bootcamp with Solidity.jpg" alt="Certificate 4" layout="fill" objectFit="cover" />
          {/* Carousel Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Navigation buttons */}
          </div>
        </div>
        {/* Additional slides */}
      </div>
    </>
  );
};

export default Carousel;
