import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;

// export default axiosInstance;


// // REQUESTURI
// const api = {
//     getProducts() {
//         return axiosInstance.get('/products')
//     },

//     getProduct(id) {
//         return axiosInstance.get(`/products/${id}`) ;
//     } }

//     addProduct(product) {
//         return axiosInstance.post('/products', product)
//     },

//     updateProuduct(id, product) {
//         return axiosInstance.get(`/products/${id}`, product) ;
//     },

//     patchProduct(id, product) {
//         return axiosInstance.patch(`/products/${id}`, product)
    
//     }
// }