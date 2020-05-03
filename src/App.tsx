import React from "react";
import PRODUCT_QUERY from "./queryEntries";
import { Query } from "react-apollo";
import { Entry } from "./Entry";

function App() {
  return (
    <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://github.com/mattiasmucherie/">
            <b className="has-text-white is-size-5">Mattias</b>
          </a>
        </div>
      </nav>
      <Query query={PRODUCT_QUERY}>
        {({ loading, error, data }: any): any => {
          if (loading)
            return (
              <div className="container">
                <progress className="progress is-small is-primary" max="100">
                  15%
                </progress>
              </div>
            );
          if (error) return <div>Error fetching data.</div>;
          const entries = data.entriesMultiple;
          return (
            <div className="section">
              {entries.map((entry: any) => (
                <Entry key={entry.id} data={entry} />
              ))}
            </div>
          );
        }}
      </Query>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://github.com/mattiasmucherie/" target="_blank" rel="noopener noreferrer">
              Mattias
            </a>
            . A test blog using a headless CMS from{" "}
            <a href="https://graphcms.com/" target="_blank" rel="noopener noreferrer">
              GraphCMS
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
