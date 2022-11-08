//IMPORT THE MODELS
const { faker } = require('@faker-js/faker');
 

//DUMMY METHODS
module.exports.createUser = (req, res) => {
    const newUser = new User()
    res.status(201).json(newUser)
}

module.exports.createCompany = (req, res) => {
    const newCompany = new Company()
    res.status(201).json(newCompany)
}

module.exports.usersAndCompanies = (req, res) => {
    const newCompany = new Company()
    const newUser = new User()
    res.status(201).json({newCompany, newUser})
}