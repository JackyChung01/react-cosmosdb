const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.cosmosPort}/?ssl/=true`;

const mongoUri = 'mongodb://react-cosmo-db:7J4Qw4HZEfGyjPb6WezwA5f6nhUcLTsgH2XvspvqC1pAjHE5xARSQNhKnYYCEUs6kTWinp46S6xj4eRm5kyT3A==@react-cosmo-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&appName=@react-cosmo-db@';
function connect() {
  //return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key }});
  return mongoose.connect(mongoUri, { useMongoClient: true});
}

module.exports = {
  connect,
  mongoose
};
