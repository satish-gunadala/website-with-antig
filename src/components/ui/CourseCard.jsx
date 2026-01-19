import { Star, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
        >
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star size={12} fill="currentColor" /> {course.rating}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-3">By {course.instructor}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                        <Users size={14} /> {course.students} students
                    </span>
                    <span className="font-semibold text-green-600 px-2 py-0.5 bg-green-50 rounded">
                        {course.price}
                    </span>
                </div>

                <div className="flex gap-2 mb-4 flex-wrap">
                    {course.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto">
                    <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                            className="block w-full text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-sky-600 transition-colors"
                    >
                        View on Udemy
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
