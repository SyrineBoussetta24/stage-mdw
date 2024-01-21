import React, { Fragment } from "react";
import withContext from "../withContext";
import "../index.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductListAdmin = (props) => {
  const { products } = props.context;

  return (
    <Fragment>
      <div className="hero qss">
        <div className="hero-body container">
          {/* <p className="t"></p> */}
        </div>
      </div>
      <br />
      <div className="container">
        <div className="card">
          <div className="card-content">
            <table className="table is-striped is-fullwidth ">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Supprimer</th>
                  <th>Modifier</th>
                  {/* <th>Type</th> */}
                </tr>
              </thead>
              <tbody>
                {products && products.length ? (
                  products.map((product, index) => (
                    <tr key={index}>
                      {/*<td>{product.id}</td>*/}
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      {/* <td>{product.type}</td> */}
                      <td>
                        
                    <a className="button is-danger">Supprimer</a>
                    </td>
                    <td>
                    <Link
                          to={`/updateInstrumentPage/${product.IDInstrument}`}
                          className="button is-success"
                        >Modifier
                    </Link>
                    {/* <a to={`/UpdateInstrumentPage/${product.IDInstrument}`} class="button is-success">Modifier</a> */}
                    </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      <div className="column">
                        <span className="title has-text-grey-light">
                          No product found!
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withContext(ProductListAdmin);
