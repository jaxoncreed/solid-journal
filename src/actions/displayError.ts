import { toast } from "react-toastify";

export function displayError(error: Error): void {
  toast(error.message);
}
