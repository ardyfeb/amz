import { Command } from 'commander';
import { searchProduct } from '@service/product';

export default (program: Command): void => {

   program
      .command('search <keyword>')
      .description('Search product')
      .option('-attr, --attribute', 'Attribute to include')
      .action((keyword: string): void => {
         searchProduct(keyword);
      })
}