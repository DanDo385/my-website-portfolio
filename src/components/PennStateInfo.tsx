// components/PennStateInfo.js
import Image from 'next/image';

const PennStateInfo = () => {
  return (
    <div className="flex h-screen">
      <div className="relative flex-1">
        <div className="absolute top-0 left-0">
          <Image src="/pennst/psu1.jpg" alt="Penn State" width={300} height={200} objectFit="cover" />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src="/pennst/psu2.jpg" alt="Penn State" width={300} height={200} objectFit="cover" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-medium">
          I graduated Magna Cum Laude from Penn State in 2006 with a Major in Finance, a 3.73 overall GPA,
          and a 3.93 Major GPA.
        </p>
      </div>
    </div>
  );
};

export default PennStateInfo;
