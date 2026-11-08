import { useParams } from "react-router-dom";
import services from "../services";

function ItemDetails() {

    const { id } = useParams();
    const service = services.find((item) => item.id === Number(id));

    console.log("Current Item ID:", id);

    if (!service) {
        return (
            <main className="page-content services-section">
                <h2>Service Not Found</h2>
                <p>The requested training program does not exist.</p>
            </main>
        );
    }

    return (
        <main className="page-content services-section">
            <h2>{service.name}</h2>

            <p className="section-description">
                {service.description}
            </p>

            <p className="price">
                ${service.price}<span>/month</span>
            </p>
        </main>
    );
}

export default ItemDetails;