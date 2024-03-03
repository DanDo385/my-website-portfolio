import React from 'react'; // Add the missing import statemen.,≤≤≤≤≤≤ºπt for React
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="bg-education-background bg-cover bg-center h-screen flex justify-center items-center">
                <div className="relative block" style={{ width: '400px', height: '400px' }}>
                    <Link href="https://www.c2defi.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <Image 
                            src="/blog.jpg" 
                            alt="C2DeFi Zone" 
                            width={400} 
                            height={400} 
                            objectFit="cover" 
                            quality={100} 
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-10">
                            <p className="text-white text-xl font-bold">C2DeFi Zone</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Blog;


