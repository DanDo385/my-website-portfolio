import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="center">
      <div className="py-10">
      <Navbar />
       <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website</h1>  
        <p className="text-gray-600 mt-4">This is a Next.js project using Tailwind CSS and DaisyUI.</p>
       
      </div>
    </div>
  );
};

export default Home;
