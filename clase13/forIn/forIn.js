// forIn exclusivo para objects
const usuario = {
    name: "Nicolas",
    age: 45,
    city: "Toronto",
};

for (const key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
}