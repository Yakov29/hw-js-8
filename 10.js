let input = prompt("Введіть число більше 100");

while (input !== null && (input <= 100 || isNaN(input))) {
  input = prompt("Будь ласка, введіть число, більше 100");
}

if (input !== null) {
  console.log(`Ви ввели число: ${input}`);
} else {
  console.log("Користувач відмінив введення.");
}
