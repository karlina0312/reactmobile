import React from "react";
import fetchData from '../utils/fetchData';

const fetchStructure = () => {
    return fetchData('structure');
}

const getLatesetVersion = () => {
    return fetchData('version/latest');
}

const checkVersion = (id) => {
    return fetchData(`version/${id}`);
}

export { fetchStructure, getLatesetVersion, checkVersion };