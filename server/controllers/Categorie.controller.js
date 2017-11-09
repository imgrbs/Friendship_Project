const Categories = require('../models/Categorie.model')

let categorie

module.exports = {
  getAll: async (req, res) => {
    categorie = await Categories.getAll()
    if (categorie != null) {
      res.json({
        status: true,
        data: categorie
      })
    } else {
      res.json({
        status: false,
        data: null
      })
    }
  }
}
