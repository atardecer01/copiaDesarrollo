const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();

  // Configura la conexión a la base de datos en memoria
  process.env.MONGO_URI = mongoUri;
});

afterAll(async () => {
  // Detén y cierra la instancia de la base de datos en memoria
  await mongoServer.stop();
});