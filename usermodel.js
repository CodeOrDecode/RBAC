const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
})

const Usermodel = mongoose.model("user", Userschema);
module.exports = Usermodel