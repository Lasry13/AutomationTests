const expect = require('chai').expect;
const db = require('../db');
const {Pool} = require('pg')
const config = require('../config.json')
const pool = new Pool(config.db)
const logging = require('../logging')
const logger = logging.logger

describe('select', () => {
    describe('#getByProductId', () => {
        it('responds with matching records', async () => {
            let product = await db.queryDb(pool, [1])
            console.log(product)
            expect(product.length).to.equal(1)
        });

        it('responds with matching records', async () => {
            let product = await db.queryDb(pool, [2])
            console.log(product)
            logger.info(product)
            expect(product[0].id).to.equal(2)
        });
    });
});
