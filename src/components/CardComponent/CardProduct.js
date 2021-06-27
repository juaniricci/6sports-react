import './styles.css'

export const CardProducts = () => {
    return (
        <div className="small-container single-product" id="lista-productos">
        <div className="row">
            <div className="col-2">
                <img src="../images/gallery-1.jpg" width="100%" id="ProductImg"></img>

                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src="../images/gallery-1.jpg" width="100%" className="small-img"></img>
                    </div>
                    <div className="small-img-col">
                        <img src="../images/gallery-2.jpg" width="100%" className="small-img"></img>
                    </div>
                    <div className="small-img-col">
                        <img src="../images/gallery-3.jpg" width="100%" className="small-img"></img>
                    </div>
                    <div className="small-img-col">
                        <img src="../images/gallery-4.jpg" width="100%" className="small-img"></img>
                    </div>
                </div>


            </div>
            <div className="col-2">
                <h1>CAMPERA REFLECTANTE OWN THE RUN</h1>
                <h4>$9999</h4>
                
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
                <input type="numer" value="1"></input>
                <a href="" className="btn agregar-carrito" id="mostrar-jquery" data-id="1">Agregar al carrito</a>
                <h3>Detalles del producto</h3>
                <br></br>
                <p>La lluvia y el viento pueden afectar tu motivación. Esta campera reflectante adidas Own the Run te permite enfrentarte a los elementos del clima sintiéndote cómodo y seguro.</p>
            </div>
        </div>
    </div>
    );
}