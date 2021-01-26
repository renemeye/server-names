const uniqueRandomArray = require('unique-random-array');
const server_name_list = require('./server-names.json');

module.exports = {
  all: server_name_list,
  random: uniqueRandomArray(server_name_list)
};
