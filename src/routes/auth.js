const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');

router.post('/register', async(req, res, next) => {
    try{
        const passwordHash = await bcrypt.hash(req.body.password, 12);
        const user = await User.create({ email: req.body.email, role: req.body.role, passwordHash });
        res.status(201).json({
            id: user.id,
            role: user.role,
            email: user.email
        });
    } catch(err){
        next(err);
    }
});

// get post req user email
router.post('/login', passport.authenticate('local'), 
(req, res) => res.json({
    id: req.user.id,
    email: req.user.email,
    role: req.user.role

}));

//get request me
router.get('/me', (req, res) => {

    if(!req.isAuthenticated()){
        return res.status(401).json({ error: 'Sign in required'});
    } else {
        res.json({ id: req.user.id, role: req.user.role,email: req.user.email });
    }
});

module.exports = router;

