import services from "./services";
import "./App.css";

function App() {
  return (
    <div className="website">
      <header className="hero">
        <h1>DontJustTrain</h1>

        <p className="tagline">
          Shaping characters, not just athletes!
        </p>

        <p className="description">
          We help athletes achieve their performance goals
          by developing both their physical abilities and
          mental strength.
        </p>
      </header>

      <main>
        <section className="services-section">
          <h2>Our Training Programs</h2>

          <p className="section-description">
            Explore our programs designed to help athletes
            improve their performance.
          </p>

          <div className="services-container">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <h3>{service.name}</h3>
                <p className="description">
                  {service.description}
                </p>

                <p className="price">
                  ${service.price}
                  <span>/month</span>
                </p>

              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 DontJustTrain. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;