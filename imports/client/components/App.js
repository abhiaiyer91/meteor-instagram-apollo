import React from 'react';
import { connect } from 'react-apollo';

function App({ instagramData }) {
  const instagramItems = instagramData && instagramData.data;
  let input;
  return (
    <div className="main-container">
      <h1>INSTAGRAM SEARCHER</h1>
      <div>
        <input type="text" ref={function (node)  {
        input = node;
      }} className="form-control" placeholder="Enter search terms..."/>
        <button className="btn btn-lg btn-success" onClick={function() {
          return instagramData && instagramData.refetch({keywords: input.value});
        }}> Submit
        </button>
      </div>
      <br/>
      <div>
        {_.map(instagramItems, (item, index) => {
          return (
            <a key={index} className="insta-image" href={item.link} target="_blank">
              <img className="hover-shadow img-responsive" src={item.images}/>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function mapQueriesToProps({ ownProps, state }) {
  return {
    instagramData: {
      query: `
          query getKeywords($keywords: String) {
            data(keywords: $keywords)  {
             images
             link
             caption
            }
          }
        `,
      forceFetch: true,
      variables: {
        keywords: ""
      }
    }
  }
}


export default connect({mapQueriesToProps})(App);
