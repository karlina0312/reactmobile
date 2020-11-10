import React from "react";
import fetchData from '../utils/fetchData';

const fetchQuestion = (cat_id) => {
    let target = 'questions';
    if (cat_id) target += `/${cat_id}`
    return fetchData(target);
}

export { fetchQuestion };