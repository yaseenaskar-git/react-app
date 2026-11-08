import { Link } from "react-router-dom";

function Header() {
return ( <header className="hero"> <h1>DontJustTrain</h1>

        <p className="tagline">
            Shaping characters, not just athletes!
        </p>

        <div className="description">
            We help athletes achieve their performance goals
            by developing both their physical abilities and
            mental strength.
        </div>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/items">Training Programs</Link></li>
            </ul>
        </nav>
    </header>
);


}

export default Header;
