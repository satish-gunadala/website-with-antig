import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                            DevOps<span className="text-primary">Mastery</span>
                            <span className="text-xs text-slate-400 font-normal ml-1">by Satish Gunadala</span>
                        </h3>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Empowering developers and sysadmins to master the cloud native ecosystem. From zero to hero in DevOps.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/youtube" className="hover:text-primary transition-colors">YouTube Tutorials</a></li>
                            <li><a href="/courses" className="hover:text-primary transition-colors">Premium Courses</a></li>
                            <li><a href="/projects" className="hover:text-primary transition-colors">Real-world Projects</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-slate-500">
                            © {new Date().getFullYear()} DevOpsMastery. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
