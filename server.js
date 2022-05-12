require("dotenv").config();
const IndexRoute = require("./src/routes/index");
const Express = require("express");
const serverless = require("serverless-http");
const app = Express();

// defining port
const port = process.env.PORT || 7000;


// For parsing the express payloads
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


// CORS permission
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    next();
});


app.use("/", IndexRoute);



//Serverless
const handler = serverless(app);
module.exports.app = async (event, context) => {
    try {
        return await handler(event, context);
    } catch (error) {
        return error;
    }
};

app.listen(port, () => {
    console.log("Server started on port ", port);
    console.log("DB connected to ", process.env.DB_HOST);
});
