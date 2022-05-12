import type { NextPage } from 'next';
import React, { useState } from 'react';
import InputField from '../components/generic/InputField';
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const onChangeSearchHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };
  const onChangeLocationHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLocation(event.target.value);
  };
  return (
    <Layout>
      <div className="main">
        <h1>Find Vegan-owned businesses near you</h1>
        <h2>Search by category and location</h2>
        <div className="field">
          <InputField
            type="text"
            id="search"
            name="search-for"
            placeholder="Accomodation"
            value={searchTerm}
            onChange={onChangeSearchHandler}
          />
          <InputField
            type="text"
            id="search"
            name="search-for"
            placeholder="Search For"
            value={searchTerm}
            onChange={onChangeSearchHandler}
          />
          <InputField
            type="text"
            id="location"
            name="location-field"
            placeholder="Near"
            value={location}
            onChange={onChangeLocationHandler}
          />
          <div className="actions">
            <button>Seach</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
