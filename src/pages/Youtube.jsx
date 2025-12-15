
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoCard from '../components/ui/VideoCard';
import FilterBar from '../components/ui/FilterBar';
import videoData from '../data/youtube.json';

const YouTube = () => {
    useEffect(() => {
        document.title = "YouTube Tutorials | DevOpsMastery";
    }, []);
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique tags for filters
    const categories = useMemo(() => {
        const allTags = videoData.flatMap(v => v.tags);
        return ["All", ...new Set(allTags)];
    }, []);

    const filteredVideos = useMemo(() => {
        if (activeCategory === "All") return videoData;
        return videoData.filter(video => video.tags.includes(activeCategory));
    }, [activeCategory]);

    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">YouTube Tutorials</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Free high-quality tutorials to get you started with DevOps and Cloud Native technologies.
                    </p>
                </div>

                <FilterBar
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelect={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </motion.div>

                {filteredVideos.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500">No videos found for this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default YouTube;
