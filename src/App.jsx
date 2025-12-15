import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
// Placeholder imports for now, we will create these files next
import VerifiedYoutube from './pages/Youtube';
import Courses from './pages/Courses';
import UrlProjects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/youtube" element={<VerifiedYoutube />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/projects" element={<UrlProjects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
