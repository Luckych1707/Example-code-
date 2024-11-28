import { createMutation } from "../createMutation";
import http from "../http";

export const deleteLanguage = createMutation({
  request: async (_, id: string) => {
    return await http.language.deleteLanguageId(id);
  },
});
