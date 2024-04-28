import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="mx-6">
        <Slider></Slider>
        <div className="text-center m-10">
            <h2 className="animate__animated animate__zoomIn text-base font-bold lg:text-5xl">Best Tourists Spots</h2>
        </div>
        <FirebaseProvider></FirebaseProvider>
    </div>
    );
};

export default Home;