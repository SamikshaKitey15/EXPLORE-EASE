const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("./users/signup.ejs");
}

module.exports.signup = wrapAsync(async(req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success",`WELCOME to ExploreEase ${registeredUser.username} !!!`);
            res.redirect("/listings");
        });
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
})

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = wrapAsync(async(req, res) => {
    let user = req.body;
    req.flash("success", `WELCOME to ExploreEase ${user.username} !!! You are logged in.`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
}