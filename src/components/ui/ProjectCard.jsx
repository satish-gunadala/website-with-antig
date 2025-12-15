import { Github, Globe, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-xl mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                </p>

                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Layers size={12} /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex gap-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 border border-slate-300 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm"
                        >
                            <Github size={16} /> Source
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                        >
                            <Globe size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
