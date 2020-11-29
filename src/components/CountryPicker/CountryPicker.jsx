import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';
const CountryPicker = () => {
  const [fetchedCoutries, setFetchedCoutries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCoutries(await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCoutries]);

  return (
    <FormControl className="styles.formControl">
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;