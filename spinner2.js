const symbols = '|/-\\|/-\\|';
let i = 0;

const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${symbols[i++]}       `);
  if (i < symbols.length) spinner();
  if (i === symbols.length) process.stdout.write('\n');
}, 200);

spinner();

// old below
// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 1700);