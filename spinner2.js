const symbols = '|/-\\|/-\\|';
let i = 0;

const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${symbols[i++]}       `);
  if (i < symbols.length) spinner();
  if (i === symbols.length) process.stdout.write('\n');
}, 200);

spinner();