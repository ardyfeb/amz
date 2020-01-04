import { default as program,  } from 'commander';

// All Commands
import { registerCommand } from '@command/index';

export async function runApp(): Promise<void>{
   // Program metadata
   program
      .name('amz')
      .version('0.1.0')

   program
      .option('-f, --format', 'output format')

   try {
      await registerCommand(program);
   } catch(error) {
      throw new Error(
         `Failed to load commands ${error.message}`
      )
   }

   program.parse(process.argv)

   if (program.args.length < 1) {
      program.help();
   }
}