import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';
import { authorType } from './schemaTypes/authorType';
import { workType } from './schemaTypes/workType';
import { tagType } from './schemaTypes/tagType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    workType,
    tagType,
  ],
};
