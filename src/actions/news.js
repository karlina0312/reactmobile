import fetchData from '../utils/fetchData';

const fetchNews = () => {
    return fetchData('news');
}

export { fetchNews };