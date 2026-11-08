import { useParams } from "react-router-dom";

function ItemDetails() {

    const { id } = useParams();

    console.log("Current Item ID:", id);

    return (
        <main className="page-content services-section">
            <h2>Training Program Details</h2>

            <h3>Selected Program ID: {id}</h3>

        </main>
    );
}

export default ItemDetails;