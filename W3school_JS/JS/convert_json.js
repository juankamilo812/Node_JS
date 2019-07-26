//Converting a JSON Text to a JavaScript Object

var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);

