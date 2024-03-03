// pages/education.tsx
import Navbar from "@/components/Navbar";
import PennStateInfo from '../components/PennStateInfo'; // Adjust the path as necessary



const Education = () => {
  return (
    <>
    <Navbar />
    <div className="bg-education-background bg-cover bg-center h-screen">
          <PennStateInfo />
    </div>
    </>
  );
};

export default Education;

