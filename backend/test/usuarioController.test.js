const request = require('supertest');
const express = require('express');
const {  registrar } = require('../controllers/usuarioController.js');
const {MongoClient} = require('mongodb');


const app = express();

app.use(express.json());
app.post('/registrar',registrar);


describe( ' prueba de la funcion registrar', ()=>{

    let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });


    test('Deberia retornar un usuario guardado si el usuario no existe', async ()=>{
        const data = {
            nombre:"auu",
            email: 'test@example.com',
            password: '123456',
          }
        
        const response = await request(app).post('/').send(data).expect(404)




        },10000)







})

