import { Component } from '@angular/core';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { toZonedTime, toDate, format, formatInTimeZone } from 'date-fns-tz';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  myId: any = '';
  item: any;
  ads: any = '';
  categoryList: any = [];
  contentformatsafe: any = '';

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    public sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta
  ) {
    // Scroll to the top of the page when the component initializes
    this.route.paramMap.subscribe(params => {
      this.myId = params.get('name');
      window.scrollTo(0, 0);
      // Do something with this.id
      this.getDetail(this.myId);
    });
  }

  async getDetail(params: any) {
    this.item = (await this.api.get('/find_slug_new/' + params)).subscribe((v: any) => {
      this.item = v.data.onevalue;
      this.title.setTitle(this.item.name + ' - Official FC Barcelona Website Cule.vn');
      this.ads = v.data.ads;
      this.categoryList = v.data.listcategory;
      this.contentformatsafe = this.sanitizer.bypassSecurityTrustHtml(this.processContent(this.item.content));
    });
  }
  getDatePublicPost(publish_date: any) {
    const timeZone = 'Asia/Ho_Chi_Minh';
    return formatInTimeZone(publish_date, timeZone, 'dd/MM/yyyy HH:mm');
  }

  processContent(content: string): string {
    // Sử dụng DOM parser để phân tích nội dung HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    // Xử lý in đậm cho các chuỗi **text**
    const boldRegex = /\*\*(.*?)\*\*/g;
    const elementsWithBoldText = doc.evaluate('//text()[contains(., "**")]', doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (let i = 0; i < elementsWithBoldText.snapshotLength; i++) {
      const node: any = elementsWithBoldText.snapshotItem(i);
      const parent = node.parentNode;

      if (parent && parent.nodeName !== 'STRONG') {
        const text = node.nodeValue || '';
        const parts = text.split('**');

        for (let j = 0; j < parts.length; j++) {
          if (j % 2 === 1) {
            const strong = doc.createElement('strong');
            strong.textContent = parts[j];
            parent.insertBefore(strong, node);
          } else {
            parent.insertBefore(doc.createTextNode(parts[j]), node);
          }
        }

        parent.removeChild(node);
      }
    }

    // Xóa các thẻ có class là "title" và "author"
    const titleElements = doc.querySelectorAll('.title');
    titleElements.forEach(titleElement => titleElement.remove());

    const authorElements = doc.querySelectorAll('.author');
    authorElements.forEach(authorElement => authorElement.remove());

    // Lấy tất cả các thẻ hình ảnh trong nội dung
    const images = doc.querySelectorAll('img');

    const allElements = doc.querySelectorAll('*');

    // Duyệt qua từng phần tử và thiết lập font-family là Tahoma
    allElements.forEach((element: any) => {
      element.style.fontFamily = 'inter';
    });

    // Lấy tất cả các thẻ h2, h3, h4, h5 trong nội dung HTML
    const headings = doc.querySelectorAll('h2, h3, h4, h5');

    // Duyệt qua từng thẻ heading và thiết lập thuộc tính font-weight là bolder
    headings.forEach((heading: any) => {
      heading.style.fontWeight = 'bolder';
    });

    // Duyệt qua từng thẻ hình ảnh và thêm thuộc tính vào
    images.forEach(img => {
      img.setAttribute('style', 'width:100%; height:auto; border-radius:20px;');
      img.setAttribute('alt', this.item.name || '');  // Thêm thuộc tính alt cho hình ảnh
      img.setAttribute('title', this.item.name || '');  // Thêm thuộc tính title cho hình ảnh
    });

    // Chuyển đổi nội dung HTML đã được chỉnh sửa thành chuỗi và trả về
    return doc.documentElement.innerHTML;
  }

  encodeURIComponent(value: string) {
    return encodeURIComponent(value);
  }
}
