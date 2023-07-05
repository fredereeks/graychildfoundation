import Contact from "../models/contact.js"

export const createContact = async(req,res,next) => {
    const contactMessage = new Contact(req.body)
    try{
        await contactMessage.save();
        res.status(200).json(`Message sent, thanks for contacting us ${req.body.firstname} ${req.body.lastname}`)
    }catch(err){
        next(err)
    }
}

export const fetchContacts = async(req,res,next) => {
    try{
        const contacts = req.params.id ? await Contact.findById(req.params.id) : await Contact.find({createdAt: -1})
        res.status(200).json(contacts)
    }catch(err){
        next(err)
    }
}

export const deleteContact = async(req,res,next) => {
    try{
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json("Contact Message Deleted!")
    }catch(err){
        next(err);
    }
}