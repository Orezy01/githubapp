import React from "react";
import "../../App.css";
import SearchBar from "../SearchBar";
import {Helmet} from 'react-helmet-async';

const Repository = () => {
  return (
    <div>
      <Helmet>
      <title>Repository</title>
      <meta name="description" content="Search For A  Repository"/>
      <link rel="canonical" href="/Repository" />
      </Helmet>
      
      <SearchBar />
    </div>
  );
};

export default Repository;
