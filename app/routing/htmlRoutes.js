const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
});


app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
});















app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});