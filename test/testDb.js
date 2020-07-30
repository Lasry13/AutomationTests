const expect = require('chai').expect;
const db = require('../db');
const {Pool} = require('pg')
const config = require('../config.json')
const logging = require('../logging')
const logger = logging.logger

describe('Test CRUD Operations on DB', () => {
    describe('#Read', () => {
        const pool = new Pool(config.db)
        let product;
        before(async () => {
            try {
                product = await db.queryDb(pool, [1])
            } catch (e) {
                logger.error(e)
            }
        });
        it('Should return product id', async () => {
            expect(product[0].id).to.equal(1)
        });

        it('Should return product name', async () => {
            expect(product[0].name).to.equal('Chicken')
        });

        it('Should return product code', async () => {
            expect(product.length).to.equal(1)
        });

        after(() => {
            pool.end()
        });
    });
});
