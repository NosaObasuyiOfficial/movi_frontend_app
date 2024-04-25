import the_dark_night from "../assets/images/the_dark_night.jpeg"
import avengers from "../assets/images/avengers.jpeg"
import spider_man from "../assets/images/spider_man.jpeg"
import bolt from "../assets/images/bolt.jpeg"
import chicken from "../assets/images/chicken.jpeg"
import wolverine from "../assets/images/wolverine.jpeg"
import prison_break from "../assets/images/prison_break.jpeg"
import love_again from "../assets/images/love_again.jpeg"

interface Slide {
    url: string;
}

const slides: Slide[] = [
    {url: the_dark_night},
    {url: avengers},
    {url: spider_man},
    {url: bolt},
    {url: chicken},
    {url: wolverine},
    {url: prison_break},
    {url: love_again},
]

export default slides