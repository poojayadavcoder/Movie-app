import movieData from '../../../movie'

export function GET(){
    // console.log(movieData.movies)
    return  Response.json(movieData.movies)
}