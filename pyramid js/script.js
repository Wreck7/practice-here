let char = "#";
let count = 8;
let rows = []

for (let i = 1; i <= count; i++) {
    rows.push(" ".repeat(count-i) + char.repeat(i*2-1) + " ".repeat(count-i));
}
for (let i = count-1; i >= 1; i--) {
    rows.push(" ".repeat(count-i) + char.repeat(i*2-1) + " ".repeat(count-i));
}
// console.log(rows)
for (const row of rows) {
console.log(row)
}