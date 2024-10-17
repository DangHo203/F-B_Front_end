import { useNavigate } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
];

interface NavMenuProps {
    handleOpenMenu: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ handleOpenMenu }) => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 top-0 w-full h-full bg-orange-600 bg-opacity-90 z-50">
            <div className="absolute top-5 right-5">
                <button
                    onClick={handleOpenMenu}
                    className="text-3xl opacity-100 text-white font-medium cursor-pointer"
                >
                    X
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <div className="flex flex-col gap-5">
                    {navItems.map((item) => (
                        <div
                            onClick={() => {
                                navigate(item.path);
                                handleOpenMenu();
                            }}  
                            className="text-3xl !opacity-100 hover:text-green-700 text-white font-medium cursor-pointer"
                            key={item.name}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default NavMenu;
