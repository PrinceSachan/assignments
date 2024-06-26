const { Admin } = require('../db/index')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.body.username
    const password = req.body.password
    Admin.findOne({
        username,
        password
    })
    .then(function(value) {
        if(value){
            next()
        } else {
            res.status(411).json({
                msg: 'Admin not exist'
            })
        }
    })

}

module.exports = adminMiddleware;