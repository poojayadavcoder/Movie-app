import hightRatedMovie from '../../../../hightRatedMovie.json'
export function GET(){
    return  Response.json(hightRatedMovie)
}