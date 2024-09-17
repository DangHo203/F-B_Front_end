/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileForm from "./ProfileForm";

const ProfilePage: React.FC = () => {
  return (
    <main className="flex gap-5 max-md:flex-col mt-5">
      <ProfileSidebar
        name="David Matin"
        title="Web developer"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8f3ac6c77f5afb176982482b9463c9e36afcf9a90eb5c2d8cb5298f8e6020288?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
      />
      <ProfileForm />
    </main>
  );
};

export default ProfilePage;
