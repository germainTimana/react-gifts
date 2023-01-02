export const getGifs = async(category) =>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=790XdSF1U3s7ENUywLCYaoUi04Ma98Sd&q=${category}&limit=20`
    const resp = await fetch (URL)
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url,
    }));
    console.log(gifs)
    return gifs;
}