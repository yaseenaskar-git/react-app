import services from "./services";

function App() {
  return (
    <div>
      <h1>DontJustTrain</h1>

      <p>Shaping characters, not just athletes!</p>

      <h2>Our Services</h2>

      {services.map((service) => (
        <div key={service.name}>
          <h3>{service.name}</h3>
          <p>${service.price}/month</p>
        </div>
      ))}
    </div>
  );
}

export default App;