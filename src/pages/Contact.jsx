import { Mail, MessageSquare, Send } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | DevOpsMastery";
    }, []);
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                    <p className="text-slate-600">
                        Have a project in mind or want to discuss DevOps consulting? Send me a message.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <MessageSquare size={18} />
                                </div>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full pl-10 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>

                    <div className="mt-12 text-center border-t border-slate-200 pt-8">
                        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                            <Mail size={16} /> or email me directly at <a href="mailto:hello@devopsmastery.com" className="text-primary hover:underline">hello@devopsmastery.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
