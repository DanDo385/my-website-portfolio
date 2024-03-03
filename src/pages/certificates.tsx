// src/pages/certificates.tsx
import Navbar from '@/components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the carousel styles


const Certificates = () => {
  // Assuming you have an array of image paths. Adjust paths as necessary.
  const images = [
    '/certs/duke-full.jpg',
    '/certs/upenn.jpg',
    '/certs/dappu.jpg',
    // add more images as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Carousel>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Certificate ${index + 1}`} />
            <p className="legend">Certificate {index + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Certificates;
