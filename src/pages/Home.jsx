import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl">This is Home</h2>
            <FirebaseProvider></FirebaseProvider>
        </div>
    );
};

export default Home;