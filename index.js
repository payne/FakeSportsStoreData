// http://zetcode.com/javascript/fakerjs/


const faker = require('faker');
const fs = require('fs')

function generateUsers() {

				  let users = []

				  for (let id=1; id <= 100; id++) {

									const productName = faker.commerce.productName();
									const department = faker.commerce.department();
									const price = faker.commerce.price();

									    users.push({
															"id": id,
															"productName": productName,
															"department": department,
															"price": price
															    });
									  }

				  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

/*
Usage: faker-cli [option]

A cli wrapper for fakerjs

Options:
  -V, --version            output the version number
  -a, --address  [option]  Street address
  -c, --company  [option]  Company info
  -d, --date     [option]  Date options
  -f  --finance  [option]  Finance field
  -i  --internet [option]  Internet goodies
  -l  --lorem    [option]  Lorem ipsum goodness
  -n  --names    [option]  Person name(s)
  -s  --system   [option]  System Info
  -C  --commerce [option]  Commerce related info 
  -p  --phone    [option]  Phone number options
  -r  --random   [option]  Randomness
  -L, --locale   [option]  Set locale, defaults to en (default: "en")
  -x, --hacker   [option]  Hackers stuff
  -H, --helpers  [option]  Detailed contextual data
  -I, --image    [option]  Image data
  -D, --database [option]  Database stuff
  --locales                List available locales
  -h, --help               output usage information
  faker-cli <cmd> help    List options available for <cmd>

  Examples

	$ faker-cli --helpers userCard
	$ faker-cli --random uuid
	$ faker-cli --locale de -H userCard

     Available options for commerce:
	color
	department
	productName
	price
	productAdjective
	productMaterial
	product

*/
