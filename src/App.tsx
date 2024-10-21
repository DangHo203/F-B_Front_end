import { Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, lazy, Suspense } from "react";

//components
import NavMenu from "./components/header/NavMenu";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//pages
const Main = lazy(() => import("./pages/Main/Main"));
const AboutUs = lazy(() => import("./pages/About/AboutUs"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Detail = lazy(() => import("./pages/DetailItem/Detail"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Profile = lazy(() => import("./pages/ProfileDetail/Profile"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const WistList = lazy(() => import("./pages/WishList/Wistlist"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

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
            <Suspense fallback={<div>Loading...</div>}>
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
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Suspense>

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
