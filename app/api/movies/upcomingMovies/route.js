import movieData from '../../../../upcomingMovies.json'

export function GET(){
    return  Response.json(movieData)
}