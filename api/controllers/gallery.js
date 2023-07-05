import Gallery from "../models/gallery.js"

export const createPhoto = async(req,res,next) => {
    const allPhotos = JSON.parse(req.body.photos)
    if(req.body.event !== ""){
        const gallery = new Gallery({
            event: req.body.event,
            photos: allPhotos
        })
        try{
            await gallery.save();
            res.status(200).json({images: allPhotos, message: "Image uploaded"})
        }catch(err){
            next(err)
        }
    }
    else{
        try{
            for(let i = 0; i < allPhotos.length; i++){
                const image = allPhotos[i];
                await new Promise(resolve => {
                    Gallery.findOneAndUpdate({event: "general"}, {$push: {photos: image}});
                    resolve(true)
                })
            }
            res.status(200).json({images: allPhotos, message: "Image uploaded"})
        }catch(err){
            next(err)
        }
    }
}

export const fetchPhotos = async(req,res,next) => {
    try{
        const gallerys = req.params.id ? await Gallery.findById(req.params.id) : await Gallery.find({createdAt: -1})
        res.status(200).json(gallerys)
    }catch(err){
        next(err)
    }
}

export const deleteGallery = async(req, res, next) => {
    const id = req.params.id;
    try{
        await Gallery.findByIdAndDelete(id)
        res.status(200).json("Gallery Deleted")
    }
    catch(err){
        next(err)
    }
}

export const deletePhoto = async(req, res, next) => {
    const photoId = req.params.id, galleryId = req.params.galleryId;
    try{
        await Gallery.findById(galleryId, {$pull: {photos: photoId}})
        res.status(200).json("Photo Deleted")
    }
    catch(err){
        next(err)
    }
}