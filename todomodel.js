const mongoose = require("mongoose")
const Todoschema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    
})
const Productmodel = mongoose.model("todo", Todoschema);

module.exports = Productmodel