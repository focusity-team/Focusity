import { z, ZodTypeAny, ZodString, ZodNumber } from "zod";

// CONSTANTS
import { UserData } from "../constants/UserData";

type Schema = {
  type: "UserData";
  [key: string]: any;
};

function buildZodSchema(schemaName: string) {
  let rawSchema: Record<string, any> = {};

  switch (schemaName) {
    case "UserData":
      rawSchema = UserData;
      break;
    default:
      throw new Error(`Schema ${schemaName} non trovato`);
  }

  const zodShape: Record<string, ZodTypeAny> = {};

  for (const key in rawSchema) {
    const field = rawSchema[key];

    let validator: ZodTypeAny;

    switch (field.type) {
      case "string": {
        let stringValidator: ZodString = z.string();

        if (field.minLength !== undefined) stringValidator = stringValidator.min(field.minLength);
        if (field.maxLength !== undefined) stringValidator = stringValidator.max(field.maxLength);
        if (field.regex !== undefined) stringValidator = stringValidator.regex(field.regex);

        validator = field.optional ? stringValidator.optional() : stringValidator;
        break;
      }

      case "number": {
        let numberValidator: ZodNumber = z.number();

        if (field.min !== undefined) numberValidator = numberValidator.min(field.min);
        if (field.max !== undefined) numberValidator = numberValidator.max(field.max);

        validator = field.optional ? numberValidator.optional() : numberValidator;
        break;
      }

      default:
        validator = z.any();
    }

    zodShape[key] = validator;
  }

  return z.object(zodShape);
}

export default function DataValidator(schema: Schema) {
  if (!schema.type) throw new Error("Schema type mancante");

  const zodSchema = buildZodSchema(schema.type);

  return {
    validate: (data: Record<string, any>) => {
      try {
        const result = zodSchema.parse(data);
        return { success: true, data: result };
      } catch (err) {
        if (err instanceof z.ZodError) {
          return { success: false, errors: err.errors };
        }
        throw err;
      }
    },
  };
}
