import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
// ----------Initialize express and cors----------
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carg"
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

// ------------------------ Manager Routes ------------------------

// Get all managers
app.get('/select', (req, res) => {
  const sql = "SELECT * FROM manager";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});
// Select all important data from the import table
app.get('/selectimp', (req, res) => {
  const sql = "SELECT * FROM imports";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});

// Get one manager by ID
app.get('/select/:ManagerId', (req, res) => {
  const { ManagerId } = req.params;
  const sql = "SELECT * FROM manager WHERE ManagerId=?";
  db.query(sql, [ManagerId], (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});

// Insert a manager
app.post('/insert', (req, res) => {
  const { username, Password } = req.body;
  const sql = "INSERT INTO manager (username, Password) VALUES (?, ?)";
  db.query(sql, [username, Password], (err, result) => {
    if (err) return res.status(400).json({ error: "Insert failed" });
    return res.status(200).json({ message: "Insert successful", result });
  });
});

// ----------INSERT EXPORTED GOODS------------


app.post('/insertexp', (req, res) => {
  const { Funitureid, exportdate,quantity } = req.body;
  const sql = "INSERT INTO exports (Funitureid,exportdate,quantity) VALUES (?, ?,?)";
  db.query(sql, [Funitureid,exportdate,quantity], (err, result) => {
    if (err) return res.status(400).json({ error: "Insert failed" });
    return res.status(200).json({ message: "Insert successful", result });
  });
});


// Fetch joined data (furniture with exports and imports)
app.get('/furniture-exports-imports', (req, res) => {
  const sql = `
    SELECT 
      funiture.Funitureid,
      funiture.furniturename,
      funiture.furnitureowner,
      exports.exportdate,
      exports.quantity AS export_quantity,
      imports.importdate,
      imports.quantity AS import_quantity
    FROM 
      funiture
    LEFT JOIN exports 
      ON funiture.Funitureid = exports.Funitureid
    LEFT JOIN imports 
      ON funiture.Funitureid = imports.Funitureid;
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to fetch joined data" });
    res.status(200).json(result);
  });
});



//insert into import table
app.post('/insertimp', (req, res) => {
  const { Funitureid, importdate, quantity } = req.body;
  const sql = "INSERT INTO imports (Funitureid, importdate, quantity) VALUES (?, ?, ?)";
  db.query(sql, [Funitureid, importdate, quantity], (err, result) => {
    if (err) return res.status(400).json({ error: "Insert failed" });
    return res.status(200).json({ message: "Insert successful", result });
  });
})

// Update a manager
app.put('/update/:ManagerId', (req, res) => {
  const { ManagerId } = req.params;
  const { username, Password } = req.body;
  const sql = "UPDATE manager SET username=?, Password=? WHERE ManagerId=?";
  db.query(sql, [username, Password, ManagerId], (err, result) => {
    if (err) return res.status(400).json({ error: "Update failed" });
    return res.status(200).json({ message: "Update successful", result });
  });
});

// Delete a manager
app.delete('/delete/:ManagerId', (req, res) => {
  const { ManagerId } = req.params;
  const sql = "DELETE FROM manager WHERE ManagerId = ?";
  db.query(sql, [ManagerId], (err, result) => {
    if (err) return res.status(400).json({ error: "Delete failed" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Manager not found" });
    }
    return res.status(200).json({ message: "Delete successful", result });
  });
});
//delete from import table



app.delete('/deleteimp/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const sql = "DELETE FROM imports WHERE FunitureId = ?";
  db.query(sql, [Funitureid], (err, result) => {
    if (err) return res.status(400).json({ error: "Delete failed" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Import fun not found" });
    }
    return res.status(200).json({ message: "Delete successful", result });
  });
});

// ------------------------ Furniture Routes ------------------------

// Get all furniture records
app.get('/selectfun', (req, res) => {
  const sql = "SELECT * FROM funiture";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});

// Get one furniture record by ID
app.get('/selectfun/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const sql = "SELECT * FROM funiture WHERE Funitureid=?";
  db.query(sql, [Funitureid], (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});
//select export table records
app.get('/selectexpo', (req, res) => {

  const sql = "SELECT * FROM exports ";
  db.query(sql,  (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    return res.status(200).json(result);
  });
});

// Insert a furniture record
app.post('/insertfun', (req, res) => {
  const { furniturename, furnitureowner } = req.body;
  const sql = "INSERT INTO funiture (furniturename, furnitureowner) VALUES (?, ?)";
  db.query(sql, [furniturename, furnitureowner], (err, result) => {
    if (err) return res.status(400).json({ error: "Insert failed" });
    return res.status(200).json({ message: "Insert successful", result });
  });
});

// Update a furniture record
app.put('/updatefn/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const { furniturename, furnitureowner } = req.body;
  const sql = "UPDATE funiture SET furniturename=?, furnitureowner=? WHERE Funitureid=?";
  db.query(sql, [furniturename, furnitureowner, Funitureid], (err, result) => {
    if (err) return res.status(400).json({ error: "Update failed" });
    return res.status(200).json({ message: "Update successful", result });
  });
});
// Update for import table


app.put('/updateimp/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const { importdate, quantity } = req.body;
  const sql = "UPDATE manager SET importdate=?, quamntity=? WHERE Funitureid=?";
  db.query(sql, [Funitureid, Importdate, quantity], (err, result) => {
    if (err) return res.status(400).json({ error: "Update failed" });
    return res.status(200).json({ message: "Update successful", result });
  });
});


// Delete a furniture record
app.delete('/dfun/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const sql = "DELETE FROM funiture WHERE Funitureid = ?";
  db.query(sql, [Funitureid], (err, result) => {
    if (err) return res.status(400).json({ error: "Delete failed" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Furniture not found" });
    }
    return res.status(200).json({ message: "Delete successful", result });
  });
});
//Delete from export table


// Delete a furniture record
app.delete('/dexpo/:Funitureid', (req, res) => {
  const { Funitureid } = req.params;
  const sql = "DELETE FROM exports WHERE Funitureid = ?";
  db.query(sql, [Funitureid], (err, result) => {
    if (err) return res.status(400).json({ error: "Delete failed" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Furniture not found" });
    }
    return res.status(200).json({ message: "Delete successful", result });
  });
});


// ------------------------ Server ------------------------

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
