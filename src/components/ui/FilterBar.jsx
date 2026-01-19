import { motion } from 'framer-motion';

const FilterBar = ({ categories, activeCategory, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
