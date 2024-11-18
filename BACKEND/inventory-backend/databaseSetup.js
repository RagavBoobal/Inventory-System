const connection = require('./dbConnection');
const createDatabaseAndTable = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS InventoryManagement', (err) => {
    if (err) throw err;
    console.log('Database created or exists already');
    connection.query('USE InventoryManagement', (err) => {
      if (err) throw err;
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS inventoryItems (
          id INT AUTO_INCREMENT PRIMARY KEY,
          itemName VARCHAR(50) NOT NULL,
          itemCode INT NOT NULL,
          quantity INT NOT NULL,
          price DECIMAL(10, 2) NOT NULL,
          description VARCHAR(255),
          category VARCHAR(30)
        )
      `;
      connection.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log('Inventory table created or exists already');
      }); 
    }); 
  });
};
createDatabaseAndTable();
