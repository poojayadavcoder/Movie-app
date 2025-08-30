import sliderData from '../../../../slider.json'

export function GET(){
    return  Response.json(sliderData.slider)
}