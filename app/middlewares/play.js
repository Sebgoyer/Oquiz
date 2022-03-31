const play = (req, res, next) => {

    if (!req.session.login) {
        return res.redirect('/play_quiz');
    }
    else {
        return res.redirect('/quiz');
    }

    next();

}

module.exports = play;