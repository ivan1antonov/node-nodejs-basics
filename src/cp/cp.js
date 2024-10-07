import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['./files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);
  process.stdin.on('end', () => {
    child.stdin.end();
  });
  child.stdout.pipe(process.stdout);

  child.on('error', (error) => {
    console.error(`Error into child process: ${error.message}`);
  });

  child.on('exit', (code) => {
    console.log(`Child process finished with code: ${code}`);
  });
  child.on('exit', (code) => {
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
