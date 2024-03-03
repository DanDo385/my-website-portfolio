import Image from 'next/image';
import Navbar from "../components/Navbar";


const Blog = () => {
  // Handler to programmatically navigate
  const navigateToExternalSite = () => {
    window.open("https://www.c2defi.com", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <div className="bg-education-background bg-cover bg-center h-screen flex justify-center items-center">
        <div className="relative inline-block" style={{ width: '400px', height: '400px' }} onClick={navigateToExternalSite}>
          <Image 
            src="/blog.jpg" 
            alt="C2DeFi Zone" 
            width={400} 
            height={400} 
            objectFit="cover" 
            quality={100} 
            className="absolute cursor-pointer"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-10">
            <p className="text-white text-xl font-bold">C2DeFi Zone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
