/* eslint-disable no-useless-catch */
import axios from 'axios'

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL


const ArticleService = {
    getData: async (title) => {
        const queryParams = {
            limit: 10
        }

        if (title) {
            queryParams.title = title
        }
        try {
            const res = await axios.get(`${apiUrl}/article`, {
                params: queryParams
            });

            return res.data;
        } catch (error) {
            throw error
        }
    },
    getById: async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/article/${id}`)
            return res.data;
        } catch (error) {
            throw error
        }
    },
    create: async (postData) => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post(`${apiUrl}/article`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                  },
            })

            return res.data
        } catch (error) {
            throw error
        }
    }
}


export default ArticleService