// Thorough — a make.fun contest entry.
// Use --shout to uppercase the line, or --help for usage.
const line = 'My agent writes unit tests for the bugs it just introduced. At least it is thorough.';

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function printUsage(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
  process.stderr.write('\n');
  process.stderr.write('Options:\n');
  process.stderr.write('  --shout  Print the line in uppercase.\n');
  process.stderr.write('  --help   Show this help text and exit.\n');
  process.stderr.write('\n');
  process.stderr.write('Default output:\n');
  process.stderr.write(`  ${line}\n`);
}

function main(): void {
  if (hasFlag('--help')) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
