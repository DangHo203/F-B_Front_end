export default function SearchBar() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-20 bg-white shadow-md gap-2 py-[100px]">
            <span className="text-[30px] font-bold">
                It’s the food and groceries you Love, delivered
            </span>

            <div className="flex flex-row items-center w-1/2 gap-2" >
                <input
                    type="text"
                    placeholder="Search for food"
                    className="w-full h-10 px-4 text-lg text-gray-600 bg-gray-100 rounded-full focus:outline-none"
                />
                <button className="w-1/4 h-10 bg-red-500 rounded-full text-white font-bold">
                    Search
                </button>
            </div>
        </div>
    );
}
