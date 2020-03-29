const request = require('supertest');
const app = require('../../src/app');
const generateUniqueId = require('../../src/utils/gerenateUniqueId');
const connection = require('../../src/database/connection');

describe('INCIDENTS', () => {

	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new incident', async () => {
		const response = await request(app)
				.post('/incidents')
				.set({
					authorization: '7d87eadf'
				})
				.send({
					title: 'Caso 10',
					description: 'Dog atropelado por aeronave alienígena',
					value: 150
				});

				expect(response.body).toHaveProperty('id');
	});
});