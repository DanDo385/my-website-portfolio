import PennStateInfo from '../components/PennStateInfo';
import Navbar from '../components/Navbar';


const education = () => {
    return (
        <>
            <Navbar />
                <div className="bg-education-background bg-cover bg-center h-screen">
                    <PennStateInfo />
                </div>
        </>
    )
}

export default education;