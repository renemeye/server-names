const uniqueRandomArray = require('unique-random-array');
const server_name_list = require('./server-names.json');

module.exports = {
  all: server_name_list,
  get_random: (count)=>(!!count)?[...Array(count)].map(uniqueRandomArray(server_name_list)):uniqueRandomArray(server_name_list)()
};
