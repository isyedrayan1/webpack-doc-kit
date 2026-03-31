const union = (arr, sep = '|') =>
  arr?.length ? arr.map(resolve).join(sep) : 'unknown';

const MAX_REFLECTION_CHILDREN = 3;

const stringifyParameters = (params = []) =>
  params
    .map(({ name, type, flags }) => {
      const optional = flags?.isOptional ? '?' : '';
      return `${name}${optional}: ${resolve(type)}`;
    })
    .join(', ');

const stringifyTypeParameters = (typeParameters = []) => {
  if (!typeParameters.length) return '';

  return `<${typeParameters
    .map(param => {
      const constraint = param.type ? ` extends ${resolve(param.type)}` : '';
      const defaultType = param.default ? ` = ${resolve(param.default)}` : '';
      return `${param.name}${constraint}${defaultType}`;
    })
    .join(', ')}>`;
};

const stringifySignature = signature => {
  const params = stringifyParameters(signature?.parameters);
  const returns = resolve(signature?.type);
  const typeParams = stringifyTypeParameters(signature?.typeParameters);

  return `${typeParams}(${params}) => ${returns}`;
};

const stringifyIndexSignatures = declaration =>
  declaration.indexSignatures
    .map(signature => {
      const key = signature.parameters?.[0];
      const keyName = key?.name ?? 'index';
      const keyType = resolve(key?.type);
      const valueType = resolve(signature.type);
      return `[${keyName}: ${keyType}]: ${valueType}`;
    })
    .join('; ');

const stringifyChildrenPreview = declaration => {
  const preview = declaration.children
    .slice(0, MAX_REFLECTION_CHILDREN)
    .map(child => `${child.name}: ${resolve(child.type)}`)
    .join('; ');

  const suffix =
    declaration.children.length > MAX_REFLECTION_CHILDREN ? '; ...' : '';

  return `{ ${preview}${suffix} }`;
};

const resolve = type => {
  if (!type) return 'unknown';

  switch (type.type) {
    case 'intrinsic':
    case 'reference': {
      const args = type.typeArguments?.length
        ? `<${type.typeArguments.map(resolve).join(', ')}>`
        : '';
      return type.name + args;
    }

    case 'literal':
      return typeof type.value === 'string'
        ? JSON.stringify(type.value)
        : String(type.value);

    case 'array':
      return resolve(type.elementType) + '[]';

    case 'tuple':
      return `Tuple<${union(type.elements, ', ')}>`;

    case 'union':
      return union(type.types, '|');

    case 'intersection':
      return union(type.types, '&');

    case 'optional':
    case 'indexedAccess':
      return resolve(type.elementType ?? type.objectType);

    case 'query':
      return resolve(type.queryType);

    case 'typeOperator':
      return resolve(type.target);

    case 'conditional':
      return `${resolve(type.trueType)}|${resolve(type.falseType)}`;

    case 'named-tuple-member':
      return resolve(type.element);

    case 'reflection': {
      const declaration = type.declaration;

      if (declaration?.signatures?.length) {
        return stringifySignature(declaration.signatures[0]);
      }

      if (declaration?.indexSignatures?.length) {
        return `{ ${stringifyIndexSignatures(declaration)} }`;
      }

      if (declaration?.children?.length) {
        return stringifyChildrenPreview(declaration);
      }

      return 'object';
    }

    case 'inferred':
    case 'unknown':
      return 'unknown';

    default:
      return type.name ?? 'unknown';
  }
};

export const someType = model => `{${resolve(model)}}`;

export const arrayType = someType,
  conditionalType = someType,
  indexAccessType = someType,
  inferredType = someType,
  intersectionType = someType,
  intrinsicType = someType,
  literalType = someType,
  namedTupleType = someType,
  optionalType = someType,
  queryType = someType,
  referenceType = someType,
  reflectionType = someType,
  tupleType = someType,
  typeOperatorType = someType,
  unionType = someType,
  unknownType = someType;

export const declarationType = someType;
export const functionType = model => `{${stringifySignature(model)}}`;
