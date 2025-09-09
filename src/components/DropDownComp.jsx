import { useState, useEffect, useRef } from "react";

export const DropdownComp = ({
    options = [],
    onSelect = () => { },
    endIcon,
    placeholder = "Select..."
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setFilteredOptions(
            options.filter((opt) =>
                opt.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, options]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item) => {
        onSelect(item);
        setQuery(item);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* input box complete div */}
            <div className="relative">
                <input
                    type="text"
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onClick={() => setIsOpen(true)}
                />

                {/* End Icon */}
                {endIcon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                        {endIcon}
                    </div>
                )}
            </div>

            {/* Dropdown List */}
            {isOpen && (
                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(item)}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-400">No options found</li>
                    )}
                </ul>
            )}
        </div>
    );
};
