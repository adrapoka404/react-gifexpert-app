export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=R7kMHiNYfMfIkZrIv7H3IBfsLAHk2Xyn&limit=10&q=${ category }`

    const resp = await fetch( url )
    const { data } = await resp.json()
    
     const gifs = data.map( image => ({
        id:image.id,
        title:image.title,
        url:image.images.downsized_medium.url
    }))
    
    return gifs
}