
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Youtube, GraduationCap, Code2 } from 'lucide-react';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home | DevOpsMastery";
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-20 pb-32">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900"
                    >
                        Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">DevOps & Cloud</span> <br />
                        Engineering
                        <span className="block text-2xl mt-4 text-primary font-medium">by Satish Gunadala</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
                    >
                        Your comprehensive guide to becoming a DevOps Engineer. From fundamentals to advanced cloud native practices.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/courses" className="bg-primary hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                            Start Learning <ArrowRight size={20} />
                        </Link>
                        <Link to="/youtube" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-lg font-bold text-lg transition-all border border-slate-200 shadow-sm">
                            Free Tutorials
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                                <Youtube size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Free YouTube Content</h3>
                            <p className="text-slate-600 mb-6">Access hundreds of free tutorials covering Docker, Kubernetes, Jenkins, and more.</p>
                            <Link to="/youtube" className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-1">
                                Watch Videos <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Courses</h3>
                            <p className="text-slate-600 mb-6">Deep dive into complex topics with structured Udemy courses and hands-on labs.</p>
                            <Link to="/courses" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                                Browse Courses <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <Code2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Real-world Projects</h3>
                            <p className="text-slate-600 mb-6">Build your portfolio with production-grade projects and case studies.</p>
                            <Link to="/projects" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                                View Projects <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
