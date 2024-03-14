import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture:{
    type:String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fmale-profile-picture%2F53018621&psig=AOvVaw04jxUOpq47m1PsdFesK862&ust=1710523518289000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjaouii9IQDFQAAAAAdAAAAABAR"
  }
}, { timestamps: true });

const  User = mongoose.model("User", userSchema);

export default User;