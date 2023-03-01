const data = { x: 5, y: 6 };

let str = JSON.stringify(data);
console.log(str);
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.parse(str));
