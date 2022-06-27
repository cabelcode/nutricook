import SearchForm from "./searchForm";

const Home = ({handleResult}) => {
    return ( 
        <div className="home">
            <h2 className="site-title">NutriCook</h2>
            <SearchForm handleResult={handleResult}/>
        </div>
     );
}

export default Home;