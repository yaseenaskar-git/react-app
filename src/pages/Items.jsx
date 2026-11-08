import ServiceList from "../components/serviceList";

function Items({ services, selectedServices, onServiceSelect }) {
    return (
        <main>
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
        </main>
    );
}

export default Items;