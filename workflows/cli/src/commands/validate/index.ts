import { Registry, SchemaValidator } from '@chain-registry/workflows';
import { existsSync } from 'fs';
import { CLIOptions, Inquirerer } from 'inquirerer'
import { ParsedArgs } from 'minimist';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {

  argv = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:'
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  const registry = new Registry(argv.registryDir)
  const validator = new SchemaValidator(registry);

  validator.validateAllData(true);

  return argv;
};