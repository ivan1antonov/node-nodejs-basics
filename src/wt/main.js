import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const numCPUs = os.cpus().length; 
  const workers = [];
  const results = new Array(numCPUs);

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker('./src/wt/worker.js');
    workers.push(worker);

    worker.postMessage(10 + i);

    worker.on('message', (result) => {
      results[i] = { status: 'resolved', data: result };
    });

    worker.on('error', () => {
      results[i] = { status: 'error', data: null };
    });
  }

  await Promise.all(workers.map(worker => new Promise(resolve => {
    worker.on('exit', () => {
      resolve();
    });
  })));

  console.log('Results:', results);

  workers.forEach(worker => worker.terminate());
};

await performCalculations();