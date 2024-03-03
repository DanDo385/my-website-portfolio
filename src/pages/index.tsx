import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Link from 'next/link';

const Blog = () => {
  return (
    <>
    <div className = "bg-education-background bg-cover bg-center h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Link href="https://www.c2defi.com" passHref>
          <a target="_blank" rel="noopener noreferrer" className="relative block w-[400px] h-[400px]">
            <Image src="/blog.jpg" alt="C2DeFi Zone" layout="fill" objectFit="cover" quality={100} />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
              <p className="text-white text-xl font-bold">C2DeFi Zone</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Blog;
