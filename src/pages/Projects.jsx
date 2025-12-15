import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
    useEffect(() => {
        document.title = "Freelance Projects | DevOpsMastery";
    }, []);
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Freelance Projects</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A showcase of real-world projects and case studies demonstrating cloud native expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
