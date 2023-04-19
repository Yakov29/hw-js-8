
let marks = [8, 6, 7, 9, 5];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
  let avg = sum / (i + 1);
  console.log(`Середній бал після ${i + 1} оцінки: ${avg}`);
  if (avg < 7) {
    console.log("Середній бал менше 7, цикл перервано.");
    break;
  }
}
