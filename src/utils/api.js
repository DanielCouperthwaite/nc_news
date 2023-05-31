import axios from "axios";

const nc_news = axios.create({baseURL: 'https://nc-news-qkml.onrender.com/api'})

export const getArticles = () => {
    return nc_news.get('/articles').then(({ data }) => {
        return data.articles
    })
}

export const getArticleById = (article_id) => {
    return nc_news.get(`/articles/${article_id}`).then(({ data }) => {
        return data
    })
}