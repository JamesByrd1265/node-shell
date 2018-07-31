module.exports = pwd;

function pwd() {
  // process.stdout.write(__dirname);
  process.stdout.write(process.cwd());
  process.stdout.write('\n prompt > ');
}
