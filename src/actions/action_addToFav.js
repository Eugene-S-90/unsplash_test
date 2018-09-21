export function addTofav(e){
    return{
        type:"ADD_TO_FAV",
        payload:{
            id:e.target.id,
            url:e.target.dataset.url,
            link:e.target.dataset.link
        }
    }
}