import { useState } from "react";
import services from "./services";
import "./App.css";
import Header from "./components/Header";
import ServiceList from "./components/serviceList";
import Footer from "./components/Footer";

function App() {
  const [selectedServices, setSelectedServices] = useState([]);

  function handleServiceSelect(serviceName) {
    setSelectedServices((previousSelected) =>
        previousSelected.includes(serviceName)
            ? previousSelected.filter((name) => name !== serviceName)
            : [...previousSelected, serviceName]
    );
}

    return (
        <div className="website">

            <header>
                
              <Header />

              <div className="description">
                  We help athletes achieve their performance goals
                  by developing both their physical abilities and
                  mental strength.
              </div>

            </header>

            <main>

              <p className="selection-summary">
              You have selected {selectedServices.length} services.
              </p>

              <ServiceList
              services={services}
              selectedServices={selectedServices}
              onServiceSelect={handleServiceSelect}
              />

            </main>

            <footer className="footer">
                <Footer />
            </footer>

        </div>
    );
}

export default App;
