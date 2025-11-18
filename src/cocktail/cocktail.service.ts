const queries = require("../queries/tag.queries");
const { sql, connectDB } = require("../config/database");

class CocktailService {
  async findcocktails() {
    try {
      const pool = await connectDB();
      const result = await pool.request().query("SELECT * FROM cocktail");
      return result.recordset;
    } catch (error) {
      return "Error: Failed find cocktails";
    }
  }

  async findCocktail(id: number) {
    try {
      const pool = await connectDB();
      const result = await pool
        .request()
        .input("id", sql.VarChar(100), id)
        .query("SELECT * FROM cocktail WHERE id = ?");
      return result.recordset[0];
    } catch (error) {
      return "Error: Failed find cocktail";
    }
  }
}

module.exports = CocktailService;
