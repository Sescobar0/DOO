import Card from "@/components/molecules/Card/Card.vue"
import GridImage from "./GridImage.vue"

export default {
    title: 'Components/organism/gridImages',
    component: GridImage,
    tags: ['autodocs']
}

export const Default = {
    args: {
        component: Card,
        arrayComponentsProps:[
            { imageUrl:'https://image.lexica.art/md2/329c21cb-a228-461d-95d9-53c61aad598e'},
            { imageUrl:'https://www.infobae.com/new-resizer/I4bAroO3IG2yADFMPfG0pG7REO8=/arc-anglerfish-arc2-prod-infobae/public/S34D53STHJAALHL372LJ54Z6SE.jpeg'}
        ]
    }
}