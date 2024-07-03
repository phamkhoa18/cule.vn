import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
// import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // constructor(private snackBar : MatSnackBar) { }

  // Hiển thị thông báo thành công
  showSuccess(message: string): void {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  // Hiển thị thông báo lỗi
  showError(message: string): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${message}`,
    });
  }
}
