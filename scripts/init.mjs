import { execaSync } from 'execa';

execaSync('pnpm', ['--filter', 'omu', 'ts'], { stderr: process.stderr, stdout: process.stdout });
execaSync('pnpm', ['--filter', 'chat', 'ts'], { stderr: process.stderr, stdout: process.stdout });
