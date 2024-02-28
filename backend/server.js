const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const DataModel = require("./DataModel");
const connectDB = require("./Database");
const PersonModel = require("./models/Person");
const ItemModel = require("./models/Item");

connectDB();

const app = express();
app.use(express.json({ extended: false }));
app.use(cors()); // Dodaj middleware CORS

// Endpoint do odczytu danych z bazy danych
app.get("/readfromdatabase/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await DataModel.findOne({ _id: id });
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error while reading data from database:", error.message);
    res.status(500).send("Server error while reading data");
  }
});

// Endpoint do odczytu wszystkich danych z bazy danych
app.get("/readfromdatabase", async (req, res) => {
  try {
    const data = await PersonModel.find();
    res.json(data);
  } catch (error) {
    console.error("Error while reading data from database:", error.message);
    res.status(500).send("Server error while reading data");
  }
});

app.get("/readFromItem", async (req, res) => {
  try {
    const data = await ItemModel.find();
    res.json(data);
  } catch (error) {
    console.error("Error while reading data from database:", error.message);
    res.status(500).send("Server error while reading data");
  }
});

// Endpoint do dodawania nowej osoby do bazy danych
app.post("/addperson", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newPerson = new PersonModel({ name, age, email });
    await newPerson.save();
    res.status(201).json({ message: "Item has added to database" });
  } catch (error) {
    console.error("Error while adding item to database", error.message);
    res.status(500).json({ error: "Exist server erro ehile adding item to database" });
  }
});

app.post("/additem", async (req, res) => {
  try {
    const { brand, model, price, availableSizes } = req.body;
    const newItem = new ItemModel({ brand, model, price, availableSizes });
    await newItem.save();
    res.status(201).json({ message: "Osoba została dodana do bazy danych" });
  } catch (error) {
    console.error("Błąd podczas dodawania osoby do bazy danych:", error.message);
    res.status(500).json({ error: "Wystąpił błąd serwera podczas dodawania osoby do bazy danych" });
  }
});

// Endpoint do zapisywania danych do bazy danych
app.post("/writetodatabase", async (req, res) => {
  try {
    const { content } = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Błąd podczas zapisywania danych do bazy danych:", error.message);
    res.status(500).send("Server error while saving data");
  }
});

// Port na którym serwer będzie nasłuchiwać
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});