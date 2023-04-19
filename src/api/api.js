import axios from 'axios';

export async function productsData() {
    const products = await axios.get('https://firestore.googleapis.com/v1/projects/codershop-1f469/databases/(default)/documents/products');
    return products;
}