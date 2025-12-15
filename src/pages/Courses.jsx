import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CourseCard from '../components/ui/CourseCard';
import coursesData from '../data/courses.json';

const Courses = () => {
    useEffect(() => {
        document.title = "Premium Courses | DevOpsMastery";
    }, []);
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Premium Courses</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Curated list of the best DevOps and Cloud Native courses on Udemy. these are comprehensive deep-dives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
