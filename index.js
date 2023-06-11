const jsonfile = require('jsonfile');
const moment = require('moment');
const FILE_PATH = "data.json";
const simplegit = require('simple-git');
const DATE = moment().subtract(125, 'd').format();

const data = {
    date : DATE
}
jsonfile.writeFile(FILE_PATH , data , () => {
    simplegit().add([FILE_PATH]).commit(DATE , {'--date':DATE});
});


