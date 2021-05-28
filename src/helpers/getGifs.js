//En la carpeta helpers creo funciones que hacen cierto trabajo en especifico
//pueden recibir argumentos en especifico se procesan y hacen un return en este caso del gif

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=11&api_key=dOUBuHHMSCmdWodT3GpYmZ91c5pqVtGq`;
    //ir a buscar
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
    
}