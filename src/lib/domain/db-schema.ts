export interface DBSchema {
    id: string;
    name: string;
    tableCount: number;
}

export const schemaNameToSchemaId = (schema: string): string =>
    schema.toLowerCase().split(' ').join('_');

export const schemaNameToDomainSchemaName = (
    schema: string | null | undefined
): string | undefined =>
    schema === null
        ? undefined
        : (schema ?? '').trim() === ''
          ? undefined
          : schema;