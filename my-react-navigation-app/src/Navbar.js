export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="brand-title">Brand</a>
        <ul>
            <li>
                <a href="/about">About</a>            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}