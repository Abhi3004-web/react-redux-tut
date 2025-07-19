import { Add_To_Cart } from '../constant'
export const addToCart = (data) => {
    return {
        type: Add_To_Cart,
        data: data
    }
}

// export const removeToCart = (data) => {
//     return {
//         type: "Remove_To_Cart",
//         data: data
//     }
// }