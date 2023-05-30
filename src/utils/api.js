import axios from "axios";

const nc_news = axios.create({baseURL: 'https://nc-news-qkml.onrender.com/api'})

export const getArticles = () => {
    return nc_news.get('/articles').then(({ data }) => {
        return data.articles
    })
}