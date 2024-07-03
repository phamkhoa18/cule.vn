import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalPage: number | null = null;
  @Input() currentPage: number | null = null;
  @Output() pageChanged = new EventEmitter<number>();

  listnew: any = [];
  pages: number[] = [];

  ngOnInit(): void {
    // Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Gọi API nếu các giá trị cần thiết đã có
    if (this.totalPage !== null && this.currentPage !== null) {
      this.calculatePages();
    } else {
      throw new Error('Lỗi');
    }
  }

  calculatePages(): void {
    this.pages = [];
    const totalPages = this.totalPage || 0;
    const currentPage = this.currentPage || 1;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        this.pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        this.pages = [2, 3, 4];
      } else if (currentPage >= totalPages - 2) {
        this.pages = [totalPages - 3, totalPages - 2, totalPages - 1];
      } else {
        this.pages = [currentPage - 1, currentPage, currentPage + 1];
      }
    }
  }

  changePage(page: number): void {
    const totalPages = this.totalPage || 0;
    if (page >= 1 && page <= totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
