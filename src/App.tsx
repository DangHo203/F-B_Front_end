import { Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//pages
import Main from "./pages/Main/Main";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";
import Detail from "./pages/DetailItem/Detail";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/ProfileDetail/Profile";
import Cart from "./pages/Cart/Cart";
import WistList from "./pages/WishList/Wistlist";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import NavMenu from "./components/header/NavMenu";


function App() {
    const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
    const [showMoveToTop, setShowMoveToTop] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 2000) {
            setShowMoveToTop(true);
        } else {
            setShowMoveToTop(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-white w-screen h-full overflow-x-hidden">
            {isOpenNavMenu && (
                <NavMenu
                    handleOpenMenu={() => setIsOpenNavMenu(!isOpenNavMenu)}
                />
            )}
            <Header setIsOpenNavMenu={setIsOpenNavMenu} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu?:id" element={<Detail />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WistList />} />
            </Routes>
            <Footer />
            {showMoveToTop && (
                <div
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    className="fixed bottom-5 right-5 p-5 rounded-[100px] bg-red-500 animate-bounce cursor-pointer"
                >
                    <FaArrowUp className="text-white text-[30px]" />
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default App;
