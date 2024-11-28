import { createMutation } from "../createMutation";
import http from "../http";

type EditLanguageSchema = {
  id: string;
  name: string;
};

export const editLanguage = createMutation({
  request: async (_, { id, name }: EditLanguageSchema) => {
    return await http.language.putLanguageId(id, { name });
  },
});
