import { Command } from 'commander';

export function registerCommand(program: Command): Promise<void> {
   const commands = [
      require('./search')
   ]

   const promises = new Promise<void>((resolve, reject) => {
      try {
         commands.forEach(commandModule => {
            commandModule.default(program);
         })
   
         resolve();
      } catch (error) {
         reject(error.message)
      }
   })

  return promises;
}