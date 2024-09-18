import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "./Components/HeroSection";
import FoodMenu from "./Components/FoodMenuNormal/FoodMenu";
import FoodMenuSpecial from "./Components/FoodMenuSpecial/FoodMenuSpecial";
import SearchBar from "./Components/SeachBar";

const Menu: React.FC = () => {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <div className="flex flex-col items-center lg:px-0 px-[30px]">
                <HeroSection />
                <SearchBar />
                <FoodMenu />
                <FoodMenuSpecial />
            </div>

            <Footer />
        </main>
    );
};

export default Menu;
