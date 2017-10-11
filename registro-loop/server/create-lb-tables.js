/**
 * In this file we run an aunto-migrate of the models that we have on our project
 * 
 *    +++++++++++++++++++++
 *    ++     WARNING     ++
 *    +++++++++++++++++++++
 * 
 * If you run auto-migrate in a model that already have the table, you will LOSE information,
 * first you need to check if there's a table, otherwise you need to use autoupdate
 * 
 * ref: https://loopback.io/doc/en/lb2/Creating-database-tables-for-built-in-models.html
 */
/*
var server = require('./server');
var dataSource = server.dataSources.mysql;       
dataSource.autoupdate(null, function (err) {
    if(err) return cb(err);
    return cb();
});   */  

var server = require('./server');
var ds = server.dataSources.mysql;
var lbTables = ['asistente', 'becas', 'industria', 'usuario'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});
