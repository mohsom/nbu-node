const request = require('request');
const cheerio = require('cheerio');

request(
    {
        url: 'http://www.bank.gov.ua/control/uk/curmetal/detail/currency?period=daily',
        encoding: null
    },
    function (err, res, body) {
        if (err) {
            console.error('Error occured: ' + err);
        } else {
            var $ = cheerio.load(body);
            var rates = {};
            var tables = $('table');

            function findTable(tables) {
                var length = tables.length;
                for (var i = 0; i < length; i++) {
                    if ($('td',$('tr', tables[i])).hasClass('col_title_c')) {
                        return tables[i];
                    }
                }
            }

            var rates_table = findTable(tables);

            function parseTable(table) {

            }
        }
    });