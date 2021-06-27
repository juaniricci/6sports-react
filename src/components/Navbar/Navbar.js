import './styles.css'

export const Navbar = () => {
    return (
        <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src="../images/logo2.png" ></img>
                </div>
                <nav>
                    <ul id="menuItems">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../productos.html">Productos</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
                <div className="menu-carrito">
                    <ul>
                        <div className="submenu">
                            <img src="../images/cart.png" ></img>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    );
}