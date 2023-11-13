export class FormResponse {

    error: string = "";
    message: string = "";

    setError(error: string) {
        this.error = error;
        this.message = "";
    }

    setMessage(message: string) {
        this.error = "";
        this.message = message;
    }

}
