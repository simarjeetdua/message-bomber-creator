import mongoose , {Schema,Document} from "mongoose";

export interface message extends Document{

    content : string;
    createdAt : Date
}

const messageSchema : Schema<message> = new Schema({
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type: Date,
        default :  Date.now
    }

})

export interface User extends Document{
    username  : string;
    email : string;
    password : string;
    verifyOtp : string;
    verifyOtpExpiry : Date,
    isAcceptMesg: boolean,
    isVerified : boolean,
    messages : message[]
}

const userSchema : Schema<User> = new Schema({
    username:{
        type : String,
        required: [true,"username is required"],
        unique : true,
        trim: true
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique :true,
    },
    password: {
        type : String,
        required : [true,"minimum 6 length is required"],
        minlength : 6,
    },
    verifyOtp:{
        type: String,
        required: [true,"verifycode is required"],
        default : null
    },
    verifyOtpExpiry:{
        type: Date,
        required: [true,"verifycode Expiry is required"],
        default : null
    },
    isAcceptMesg:{
        type: Boolean,
        default: true   
    },
    isVerified:{
        type: Boolean,
        default : false
    },
    messages: [messageSchema]
  
})

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",userSchema);
export default userModel;