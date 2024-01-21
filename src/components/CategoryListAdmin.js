import React, { Fragment } from "react";
import withContext from "../withContext";
import "../index.css";
import { Link } from "react-router-dom";

const CategoryListAdmin = (props) => {
  const { categories } = props.context;

  return (
    <Fragment>
      <div className="hero qss">
        <div className="hero-body container"></div>
      </div>
      <br />
      <div className="container">
        <div className="card">
          <div className="card-content">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Supprimer</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>
                {categories && categories.length ? (
                  categories.map((category, index) => (
                    <tr key={index}>
                      <td>{category.nom}</td>
                      <td>{category.description}</td>
                      <td>
                        <button className="button is-danger">Supprimer</button>
                      </td>
                      <td>
                        <Link
                          to={`/updateCategoryPage/${category.categoryId}`}
                          className="button is-success"
                        >
                          Modifier
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      <div className="column">
                        <span className="title has-text-grey-light">
                          No category found!
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

export default withContext(CategoryListAdmin);
