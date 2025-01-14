import * as fs from 'fs';
import { basename, dirname, join } from 'path';
import { generateTypeScript, JSONSchema, SchemaTSOptions } from 'schema-typescript';

import { Registry } from './registry';

// Default titles for certain schemas
// TODO create issue in cosmos/chain-registry
const DEFAULT_TITLES: { [filename: string]: string } = {
  'ibc_data.schema.json': 'IBCData',
  'chain.schema.json': 'Chain',
  'assetlist.schema.json': 'AssetList',
  'versions.schema.json': 'Versions',
  'memo_keys.schema.json': 'MemoKeys',
};


// Define an interface for the constructor options
export interface SchemaTypeGeneratorOptions {
  outputDir: string;
  schemaTSOptions: Partial<SchemaTSOptions>;
  supportedSchemas?: string[];
  registry: Registry;
}

export class SchemaTypeGenerator {
  private outputDir: string;
  private registry: Registry;
  private schemaTSOptions: Partial<SchemaTSOptions>
  private supportedSchemas: Set<string>;

  constructor(options: SchemaTypeGeneratorOptions) {
    this.outputDir = options.outputDir;
    this.registry = options.registry;
    this.schemaTSOptions = options.schemaTSOptions;
    this.supportedSchemas = new Set(options.supportedSchemas || []);
  }

  private updateSchemaTitle(schema: JSONSchema, schemaFile: string): void {
    const filename = basename(schemaFile);
    if (DEFAULT_TITLES[filename]) {
      schema.title = DEFAULT_TITLES[filename];
    }
  }

  private isSchemaSupported(filePath: string): boolean {
    if (this.supportedSchemas.size === 0) return true; // If no filter is provided, process all files
    const filename = basename(filePath);
    return this.supportedSchemas.has(filename);
  }

  public generateTypes(): void {
    this.registry.schemas.forEach(fileInfo => {
      const schemaFile = fileInfo.path;
      if (this.isSchemaSupported(schemaFile)) {
        try {
          const schema = fileInfo.content;
          this.updateSchemaTitle(schema, schemaFile);
          const result = generateTypeScript(schema, this.schemaTSOptions);
          const filename = this.getOutputFilename(schemaFile);
          this.ensureDirExists(filename);
          this.writeFile(filename, result);
        } catch (e) {
          console.log({ schemaFile })
        }
      }
    });
  }

  private getOutputFilename(schemaFile: string): string {
    const filename = basename(schemaFile);
    return join(this.outputDir, filename.replace(/.json$/, '.ts'));
  }

  private ensureDirExists(filePath: string): void {    
    this.mkdirpSync(dirname(filePath));
  }

  private mkdirpSync(p: string): void {
    if (!fs.existsSync(p)) {
      this.mkdirpSync(dirname(p));
      fs.mkdirSync(p);
    }
  }


  private writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content);
  }
}
