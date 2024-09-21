export class CustomResponse {
  constructor() {
  }

  success: boolean = true;
  data?: object;
  message?: string;
  errors?: string[]
  validations?: string[]
}
