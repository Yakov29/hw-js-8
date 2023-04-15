let goods = 5;
let totalPrice = 0;
for (let i = 0; i < goods; i++) {
  let price = Math.floor(Math.random() * 4501) + 500;
  totalPrice += price;
}
console.log(`Загальна вартість покупки: ${totalPrice}`);
