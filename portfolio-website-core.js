// Core structure for the portfolio website
// This file contains the essential components and configurations

// Main layout component
export const EngineeringLayout = ({ children }) => {
  return (
    <div className="engineering-layout">
      <header className="engineering-header">
        <nav className="main-navigation">
          <div className="logo">Engineer Usman</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="engineering-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: contact@engineer-usman.com</p>
            <p>LinkedIn: linkedin.com/in/usman-yousaf</p>
          </div>
          <div className="footer-section">
            <h3>Professional Links</h3>
            <ul>
              <li><a href="/projects">Portfolio</a></li>
              <li><a href="/contact">Hire Me</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <p>© 2025 M. Usman Yousaf - Mechanical Design Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Engineering theme configuration
export const engineeringTheme = {
  colors: {
    primary: '#0B5394', // Blueprint blue
    secondary: '#E74C3C', // Precision red
    tertiary: '#2C3E50', // Technical dark blue
    background: '#F5F7FA', // Light gray background
    text: '#333333', // Dark text
    accent: '#3498DB', // Highlight blue
    grid: '#D6EAF8', // Grid line color
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Open Sans, sans-serif',
    technical: 'Consolas, monospace',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
  },
  borderRadius: {
    small: '3px',
    medium: '5px',
    large: '10px',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
};

// Next.js configuration for GitHub Pages
export const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: './',
  basePath: '',
  trailingSlash: true,
};

// Project data structure
export const projectStructure = {
  id: String, // Unique identifier
  title: String, // Project title
  slug: String, // URL-friendly name
  category: String, // e.g., "Robotics", "Drone Design"
  description: String, // Short description
  content: String, // Detailed content
  images: Array, // List of image paths
  technologies: Array, // List of technologies used
  client: String, // Client name if applicable
  date: String, // Project date
  featured: Boolean, // Whether to feature on homepage
  specifications: Object, // Technical specifications
};

// Sample project data
export const sampleProject = {
  id: "ugo-robot",
  title: "UGO (Un-Attended Genius Operator)",
  slug: "ugo-robot",
  category: "Robotics",
  description: "Autonomous robot system designed for industrial applications",
  content: "The UGO robot is an autonomous system designed to operate in industrial environments without human supervision. It features advanced sensors, machine learning capabilities, and robust mechanical design to handle various tasks.",
  images: ["/images/projects/ugo-robot-1.jpg", "/images/projects/ugo-robot-2.jpg"],
  technologies: ["Robotics", "Machine Learning", "Sensor Fusion", "Mechanical Design"],
  client: "Industrial Automation Inc.",
  date: "2023",
  featured: true,
  specifications: {
    dimensions: "120cm x 80cm x 160cm",
    weight: "75kg",
    payload: "25kg",
    batteryLife: "8 hours",
    sensors: ["LIDAR", "Cameras", "Ultrasonic", "Pressure Sensors"]
  }
};
