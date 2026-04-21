/*function declaration middleware */
function logTime(req, res, next) {
    const now = new Date().toLocaleDateString()
    console.log((`[${now}] Got a request for url ${req.url} - method ${req.method}`));
    next()

}

module.exports = logTime