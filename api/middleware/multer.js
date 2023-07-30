import { diskStorage } from "multer"
import multer from "multer"

const MIME_TYPE = {
    'image/jpg': 'jpg',
    'image/png': "png",
    'image/jpeg':"jpeg"   
}

const storage = diskStorage({
    destination: (req,file,callback)=>{
         callback(null, 'api/images')
    },
    filename: (req,file,callback)=>{
        const name = file.originalname.split(" ").join("_");
        const extension =  MIME_TYPE[file.mimetype]
        callback(null, name+Date.now()+'.'+extension)
    }
})
export default multer({storage})

