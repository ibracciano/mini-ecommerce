async function products() {
    let api = 'https://fakestoreapi.com/products';
    const response = await fetch(api)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error)
    }
}


async function singleProducts({ params }) {
    let api = `https://fakestoreapi.com/products/${params.id}`;
    const response = await fetch(api)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

export { products, singleProducts };