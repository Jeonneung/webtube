import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/webtube", {
  /*useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 이 코드들은 mongoose가 6.0 버전 이상이기 때문에 항상 이 코드를 기억하고 실행하여 더이상 지원하지 않는다.*/
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
