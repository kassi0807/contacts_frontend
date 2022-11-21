import { useEffect, useRef } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate, Navigate, useParams} from "react-router-dom"
import { CancelAction, ChangePhotoView, PhotoView, SaveAction } from "../views"
import avatar from "../../../assets/avatar.png"
import { photoUploaded } from "../models"

export const ChangePhoto = () =>  {
    const reference = useRef(null)
    const photo = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const action = () => dispatch(photoUploaded({
            id, photo: reference.current.files[0]
    }))

    const actions = {
        cancel: <CancelAction action={() => navigate("/contacts")}/>,
        change: <SaveAction action={action} />
    }
    
    useEffect(() => {
        photo.current.src = avatar
    }, [])

    const callback = () => {
        photo.current.src = reference.current.files[0] ? 
            URL.createObjectURL(reference.current.files[0]): avatar
    }
        
    
    const {errors, status} = useSelector(state => state.contacts)
    const data = {
        reference,
        callback,
        errors: errors.photo,
        preview: <PhotoView reference={photo}/>
    }
    if(status.uploading !== "fulfilled")
        return <ChangePhotoView data={data} actions={actions}/>
    else  return <Navigate to="/contacts" replace />
}
