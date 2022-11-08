const ExpressController = require("../controllers/express.controller")

//DEFINE THE ROUTES
module.exports = app => {
    app.get('/api/users/new', ExpressController.createUser),
    app.get('/api/companies/new', ExpressController.createCompany),
    app.get('/api/user/company', ExpressController.usersAndCompanies)
}