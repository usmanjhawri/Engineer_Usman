// Home page component for the engineering portfolio website
export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="blueprint-background">
          <div className="hero-content">
            <h1>M. Usman Yousaf</h1>
            <h2>Mechanical Design Engineer</h2>
            <p>Specializing in Robotics, Drone Design, and CFD Analysis</p>
            <div className="hero-cta">
              <a href="/projects" className="primary-button">View Portfolio</a>
              <a href="/contact" className="secondary-button">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/graphics/blueprint_gear.svg" alt="Technical blueprint" />
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/images/graphics/ugo_robot.svg" alt="UGO Robot" />
            </div>
            <div className="project-content">
              <h3>UGO (Un-Attended Genius Operator)</h3>
              <p>Autonomous robot system designed for industrial applications</p>
              <div className="project-tags">
                <span>Robotics</span>
                <span>Automation</span>
              </div>
              <a href="/projects/ugo-robot" className="view-project">View Details</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="/images/graphics/drone_technical.svg" alt="ZenaDrone 2000" />
            </div>
            <div className="project-content">
              <h3>ZenaDrone 2000</h3>
              <p>Advanced drone design with optimized aerodynamics and stability</p>
              <div className="project-tags">
                <span>Drone Design</span>
                <span>CFD Analysis</span>
              </div>
              <a href="/projects/zenadrone-2000" className="view-project">View Details</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="/images/graphics/hybrid_vehicle.svg" alt="MYPRID Hybrid Vehicle" />
            </div>
            <div className="project-content">
              <h3>MYPRID (3-Wheeler Hybrid Vehicle)</h3>
              <p>Innovative hybrid vehicle design with improved fuel efficiency</p>
              <div className="project-tags">
                <span>Hybrid Vehicles</span>
                <span>Mechanical Design</span>
              </div>
              <a href="/projects/myprid-hybrid-vehicle" className="view-project">View Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-overview">
        <h2>Technical Expertise</h2>
        <div className="skills-container">
          <div className="skills-chart">
            <img src="/images/graphics/skills_radar.svg" alt="Skills radar chart" />
          </div>
          <div className="skills-list">
            <div className="skill-category">
              <h3>CAD Software</h3>
              <ul>
                <li>SolidWorks</li>
                <li>AutoCAD</li>
                <li>Fusion 360</li>
                <li>CATIA</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Simulation Tools</h3>
              <ul>
                <li>ANSYS</li>
                <li>SolidWorks Simulation</li>
                <li>Fluent</li>
                <li>CFD Analysis</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design Specialties</h3>
              <ul>
                <li>Robotics</li>
                <li>Drone Design</li>
                <li>Hybrid Vehicles</li>
                <li>Mechanical Systems</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills-cta">
          <a href="/skills" className="primary-button">View All Skills</a>
        </div>
      </section>

      <section className="experience-timeline">
        <h2>Professional Experience</h2>
        <div className="timeline-container">
          <img src="/images/graphics/experience_timeline.svg" alt="Experience timeline" />
          <div className="timeline-cta">
            <a href="/experience" className="primary-button">View Full Experience</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Let's Work Together</h2>
        <p>Interested in collaborating on a project or hiring me for your team?</p>
        <a href="/contact" className="primary-button">Get in Touch</a>
      </section>
    </div>
  );
};

// Projects page component
export const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <section className="projects-header">
        <h1>Engineering Portfolio</h1>
        <p>Browse my projects by category or view all</p>
        <div className="project-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Robotics</button>
          <button className="filter-button">Drone Design</button>
          <button className="filter-button">CFD Analysis</button>
          <button className="filter-button">Hybrid Vehicles</button>
          <button className="filter-button">Mechanical Design</button>
        </div>
      </section>

      <section className="projects-grid">
        {/* Project cards would be dynamically generated here */}
        {/* Sample project card structure */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/graphics/ugo_robot.svg" alt="UGO Robot" />
          </div>
          <div className="project-content">
            <h3>UGO (Un-Attended Genius Operator)</h3>
            <p>Autonomous robot system designed for industrial applications</p>
            <div className="project-tags">
              <span>Robotics</span>
              <span>Automation</span>
            </div>
            <a href="/projects/ugo-robot" className="view-project">View Details</a>
          </div>
        </div>
        
        {/* Additional project cards would follow the same structure */}
      </section>
    </div>
  );
};

// Admin dashboard component for content management
export const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <section className="admin-header">
        <h1>Portfolio Management</h1>
        <p>Add, edit, or remove projects from your portfolio</p>
        <a href="/admin/add-project" className="primary-button">Add New Project</a>
      </section>

      <section className="projects-management">
        <h2>Your Projects</h2>
        <div className="project-list">
          {/* Project items would be dynamically generated here */}
          {/* Sample project item structure */}
          <div className="project-item">
            <div className="project-info">
              <h3>UGO (Un-Attended Genius Operator)</h3>
              <span className="project-category">Robotics</span>
            </div>
            <div className="project-actions">
              <a href="/admin/edit-project/ugo-robot" className="edit-button">Edit</a>
              <button className="delete-button">Delete</button>
            </div>
          </div>
          
          {/* Additional project items would follow the same structure */}
        </div>
      </section>

      <section className="categories-management">
        <h2>Project Categories</h2>
        <div className="categories-list">
          {/* Category items would be dynamically generated here */}
          {/* Sample category item structure */}
          <div className="category-item">
            <span className="category-name">Robotics</span>
            <span className="project-count">3 projects</span>
          </div>
          
          {/* Additional category items would follow the same structure */}
        </div>
      </section>
    </div>
  );
};
