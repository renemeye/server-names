import uniqueRandomArray from 'unique-random-array';
import server_name_list from './server-names.json';

module.exports = {
  all: server_name_list,
  get_random: (count)=>(!!count)?[...Array(count)].map(uniqueRandomArray(server_name_list)):uniqueRandomArray(server_name_list)()
};
