import { Play, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoCard = ({ video }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
        >
            <div className="relative group">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/90 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    >
                        <Play fill="currentColor" size={24} />
                    </a>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3 flex-wrap">
                    {video.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-sky-50 text-sky-600 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{video.description}</p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-400 text-xs gap-1">
                        <Calendar size={14} />
                        <span>{new Date(video.date).toLocaleDateString()}</span>
                    </div>
                    <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary text-sm font-medium hover:underline"
                    >
                        Watch Now <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default VideoCard;
