import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/Navbar';
import countriesJson from './countries.json';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        console.log(data);
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />;
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
