export interface IResponse {
  message?: string;
  userMessage?: string;
  code: number;
  codeAsString?: string;
  description?: string;
  success?: boolean;
}