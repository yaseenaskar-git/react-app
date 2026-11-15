import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const { user, token, logout } = useAuth();

    const [protectedData, setProtectedData] = useState(null);
    const [error, setError] = useState("");
    const [adminMessage, setAdminMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProtectedData() {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/protected",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (response.status === 401) {
                    logout();
                    navigate("/login");
                    return;
                }

                if (!response.ok) {
                    throw new Error(data.message || "Unable to access protected information.");
                }

                setProtectedData(data);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchProtectedData();
    }, [token]);

    async function checkAdminAccess() {
    setAdminMessage("");

    try {
        const response = await fetch(
            "http://localhost:5000/api/protected/admin",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (response.status === 401) {
            setAdminMessage("401: Authentication required. Please log in again.");
            return;
        }

        if (response.status === 403) {
            setAdminMessage("403: Access forbidden. You do not have administrator permissions.");
            return;
        }

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong.");
        }

        setAdminMessage(data.message);

    } catch (error) {
        setAdminMessage(error.message);
    }
}

    return (
        <main className="dashboard-container">
            <h2>Dashboard</h2>

            <p>Welcome, {user.email}!</p>

            <p>You are successfully logged in.</p>

            <h3>Protected Backend Information</h3>

            {protectedData && (
                <div>
                    <p>{protectedData.message}</p>
                </div>
            )}

            {error && <p role="alert">{error}</p>}

            <h3>Administrator Access</h3>

            <button onClick={checkAdminAccess}>
                Check Admin Access
            </button>

            {adminMessage && <p role="alert">{adminMessage}</p>}

            <button onClick={logout}>Log Out</button>
        </main>
    );
}

export default Dashboard;