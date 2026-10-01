import { REGISTER_CONTENT, LOGIN_CONTENT } from "@/src/data/auth";
import { RegisterPageContent, LoginPageContent } from "@/src/types";

export function getRegisterContent(): RegisterPageContent {
  return REGISTER_CONTENT;
}

export function getLoginContent(): LoginPageContent {
  return LOGIN_CONTENT;
}

