import ServiceList from "../components/serviceList";
import { Link } from "react-router-dom";

function Items({ services, selectedServices, onServiceSelect }) {
    return (
        <main className="page-content">
            <h2>Our Training Programs</h2>

            <p>Explore our available athletic training programs.</p>

            <p className="selection-summary">
                You have selected {selectedServices.length} services.
            </p>

            <ServiceList
                services={services}
                selectedServices={selectedServices}
                onServiceSelect={onServiceSelect}
            />

            <div>
                <h3>Explore Individual Programs</h3>

                <Link to="/items/1">Strength and Conditioning</Link>
                <br />

                <Link to="/items/2">Nutrition Coaching</Link>
                <br />

                <Link to="/items/3">Combined Training Package</Link>
            </div>
        </main>
    );
}

export default Items;