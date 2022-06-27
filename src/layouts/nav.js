import SearchForm from "./searchForm";

const Nav = ({handleResult}) => {
    return ( 
        <nav>
            <h2 className="site-title">NutriCook</h2>
            <SearchForm handleResult={handleResult}/>
        </nav>
     );
}

export default Nav;