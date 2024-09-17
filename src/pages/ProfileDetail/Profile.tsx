/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProfilePage from "./Components/ProfilePage";

const Profile: React.FC = () => {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <ProfilePage />
            <Footer />
        </main>
    );
};

export default Profile;
