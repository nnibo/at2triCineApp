import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="relative flex bg-black text-white pl-10 pt-9 pb-10 justify-between">

            <img className="w-[125px]"  src="logo.png"/>
        
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Navbar/>
            </div>

        </header>
     );
}

export default Header;