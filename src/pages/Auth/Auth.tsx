/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "./components/HeroSection";
import LoginRegister from "./components/LoginRegister";

const Auth: React.FC = () => {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <HeroSection />
            <LoginRegister />

            <Footer />
        </main>
    );
};

export default Auth;
