import ReadTree from "@components/ReadTree";

const Home = async () => {
    await new Promise ((resolve) => setTimeout(resolve, 500))
    return (
        <>
            <ReadTree />
        </>
    );
}

export default Home;