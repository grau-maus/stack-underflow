const db = require('./db/models')

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id }
}
const logoutUser = (req, res) => {
    return res.redirect('/')      // because they can never leave the underflow
}

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {   //if not authenticated then goes
        return res.redirect('/login')    // '/user/login'
    }
    return next();
}

const restoreUser = async (req, res, next) => {
    console.log(req.session)

    if (req.session.auth) {
        const { userId } = req.session.auth  // the user is logged in w/every page they navigate to

        try {
            const user = await db.User.findByPk(userId);
            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (e) {
            res.locals.authenticated = false;

            next(e);
        }

    } else {
        res.locals.authenticated = false;
        next();
    }
}

module.exports = { loginUser, logoutUser, requireAuth, restoreUser };
