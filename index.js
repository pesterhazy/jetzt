const sleep = require('then-sleep');
const pgp = require('pg-promise')();
const db = pgp(process.env.JETZT_PG_CONN);

module.exports = async function(req, res) {
    const articles = await db.any('SELECT * FROM article');

    return JSON.stringify(articles);
}
