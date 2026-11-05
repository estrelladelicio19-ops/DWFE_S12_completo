const URL_API = "http://localhost:3000/api/products";
const URL_API_PUBLICO = "https://dummyjson.com/products";

 export async function ObtenerProductos(){
    const response = await fetch(URL_API);

    if(!response.ok)
    {
        throw new Error("Error al cargar la data");
        
    }

    return await response.json()
}

