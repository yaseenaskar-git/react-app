import { useState } from "react";
import services from "./services";
import "./App.css";
import Header from "./components/header";
import ServiceList from "./components/serviceList";
import Footer from "./components/footer";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import ItemDetails from './pages/ItemDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
   
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/items"
                    element={
                        <Items
                            services={services}
                            selectedServices={selectedServices}
                            onServiceSelect={handleServiceSelect}
                        />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
/>


                <Route path="/items/:id" element={<ItemDetails />} />
            </Routes>

            <footer className="footer">
                <Footer />
            </footer>

        </div>
    );
}

export default App;
