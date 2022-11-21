import { useEffect, useRef } from "react"
import avatar from  "../../../assets/avatar.png"
import { PhotoView } from "../views"

export const Photo = ({photo, id}) => {
    const image = useRef(null)

    useEffect(() => {
        image.current.src =  photo ?
            `http://localhost:8000/api/photos/${photo}/contacts/${id}` :
            image.current.src = avatar
    },[image, photo, id])

    return <PhotoView reference={image}/>
}