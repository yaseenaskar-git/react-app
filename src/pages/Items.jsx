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

                {services.slice(0, 3).map((service) => (
                    <div key={service.id}>
                        <Link to={`/items/${service.id}`}>
                            {service.name}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Items;