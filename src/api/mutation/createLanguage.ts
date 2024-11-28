import { CreateLanguageSchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createLanguage = createMutation({
  request: async (_, data: CreateLanguageSchema) => {
    return await http.language.postLanguage(data);
  },
});
