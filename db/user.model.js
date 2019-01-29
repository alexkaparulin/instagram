const mongoose = require('./mongoose.connection');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email : { type : String, required : true },
    fullname  : { type : String, required : true },
    username      : { type : String, required : true, unique : false},
    password   : { type : String, required : true },
    // phone      : {
    //     type: String,
    //     validate: {
    //       validator: function(v) {
    //         return /\d{3}-\d{3}-\d{4}/.test(v);
    //       },
    //       message: props => `${props.value} is not a valid phone number!`
    //     },
    //     required: [false, 'User phone number required']
    //   }
}, {timestamps:true});

module.exports = mongoose.model('User', UserSchema);
