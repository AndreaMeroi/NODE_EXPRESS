function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: true,
        message: 'Post non trovato'
    })
}

module.exports = notFound