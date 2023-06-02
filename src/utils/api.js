import axios from "axios";
import { UserContext } from "../../Contexts/userContext";

const nc_news = axios.create({baseURL: 'https://nc-news-qkml.onrender.com/api'})

export const getArticles = () => {
    return nc_news.get('/articles').then(({ data }) => {
        return data.articles
    })
}

export const getTopics = () => {
    return nc_news.get('/topics').then(({ data }) => {
        return data.topics
    })
}

export const getArticlesByTopic = (topic) => {
    return nc_news.get(`/articles?topic=${topic}`).then(({ data }) => {

        if(topic === 'cooking'){
            return [data.articles[7], data.articles[17], data.articles[18]]
        } else if (topic === 'football'){
            return [data.articles[8], data.articles[11], data.articles[16]]
        } else if (topic === 'coding'){
            return [data.articles[19], data.articles[21], data.articles[31]]
        }
    })
}

export const getArticleById = (article_id) => {
    return nc_news.get(`/articles/${article_id}`).then(({ data }) => {
        return data
    })
}

export const getCommentsById = (article_id) => {
    return nc_news.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments
    })
}

export const postComment = (newComment, article_id, username) => {

    const postBody = {
        username: username,
        body: newComment,
    }
    return nc_news
        .post(`/articles/${article_id}/comments`, postBody)
        .then(( data ) => {
        return data.data.comment
        
    })
}


export const patchUpVote = (article_id) => {
    const patchBody = {
        inc_votes : 1,
    }
    return nc_news
        .patch(`/articles/${article_id}/`, patchBody)
        .then(( data ) => {
        return data
    })
}

export const patchDownVote = (article_id) => {
    const patchBody = {
        inc_votes : -1,
    }
    return nc_news
        .patch(`/articles/${article_id}/`, patchBody)
        .then(( data ) => {
        return data
    })
}

export const patchHeartUpVote = (article_id) => {
    const patchBody = {
        inc_votes : 1000,
    }
    return nc_news
        .patch(`/articles/${article_id}/`, patchBody)
        .then(( data ) => {
        return data
    })
}

export const patchHeartDownVote = (article_id) => {
    const patchBody = {
        inc_votes : -1000,
    }
    return nc_news
        .patch(`/articles/${article_id}/`, patchBody)
        .then(( data ) => {
        return data
    })
}