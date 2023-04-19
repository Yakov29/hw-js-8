let input = prompt("Введіть число більше 100");

while (input <= 100 || isNaN(input)) {
  input = prompt("Будь ласка, введіть число, більше 100");
}

console.log(`Ви ввели число: ${input}`);
