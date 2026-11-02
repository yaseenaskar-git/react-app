
function ServiceList({ services, selectedServices, onServiceSelect }) {
return ( <section className="services-section"> <h2>Our Training Services</h2> <p>Explore our available training programs.</p>


        <div className="services-container">
            {services.map((service) => (
                <article
                    className={`service-card ${selectedServices.includes(service.name) ? "selected" : ""}`}
                    key={service.name}
                    onClick={() => onServiceSelect(service.name)}
                >
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
);


}

export default ServiceList;
