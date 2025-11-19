const fs = require("fs");
const path = require("path");

// Leer el archivo data.json

const filePath = path.join(__dirname, "../ej3/data.json");
// Vaciar el archivo escribiendo un array vacío
fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf8");
console.log("Archivo data.json vaciado correctamente");

function saveData(d) {
  const data = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(data);
  jsonData.push(d);
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf8");
}


module.exports = { saveData };