import express,{Express,Request,Response} from 'express'

const app:Express = express();

app.get("/", (req:Request, res:Response) => {
  res.json({
    message: "hello from ts!!! & nodemon",
  });
});

app.get("/test",(req:Request,res:Response)=>{
  res.json({
    message: "this is a testing route"
  })
})

app.listen(6969, () => {
  console.log("server started on port 6969");
});
