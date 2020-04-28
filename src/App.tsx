import React from 'react';
import PRODUCT_QUERY from "./queryEntries";
import { Query } from 'react-apollo';

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
        <div className="container"> This is a test blog.</div>
        <Query query={PRODUCT_QUERY}>
          {({loading, error, data})=> {
            if (loading) return <div>Fetching...</div>;
            if (error) return <div>Error fetching data.</div>;
            const entries = data.entriesMultiple;
            return (
                <div className="container">
                  {entries.map((entry:any) => <div key={entry.id}>{entry.id}</div> )}
                </div>
            )
          }}
        </Query>
      </>
  );
}

export default App;
