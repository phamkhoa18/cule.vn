import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-layout',
  templateUrl: './generate-layout.component.html',
  styleUrls: ['./generate-layout.component.scss']
})
export class GenerateLayoutComponent {
  sections = [
    {
      name: 'Section 1',
      layout: 'one-columns',
      rows: [
        {
          columns: [
            {
              components: []
            }
          ]
        }
      ],
      location: 1
    },
    {
      name: 'Section 2',
      layout: 'two-columns',
      rows: [
        {
          columns: [
            {
              components: []
            },
            {
              components: []
            }
          ]
        }
      ],
      location: 2
    },
    {
      name: 'Section 3',
      layout: 'three-columns',
      rows: [
        {
          columns: [
            {
              components: []
            },
            {
              components: []
            },
            {
              components: []
            }
          ]
        }
      ],
      location: 3
    }
    // Add more sections as needed
  ];

  layouts = [
    { name: 'layout 1', layout: 'one-columns', type: 1 },
    { name: 'layout 2', layout: 'two-columns', type: 2 },
    { name: 'layout 3', layout: 'three-columns', type: 3 },
    { name: 'layout 4', layout: 'four-columns', type: 4 },
    { name: 'layout 5', layout: 'five-columns', type: 5 },
    { name: 'layout 6', layout: 'six-columns', type: 6 },
    { name: 'layout 7', layout: 'seven-columns', type: 7 },
    { name: 'layout 8', layout: 'eight-columns', type: 8 },
  ];

  constructor() {}

  addSection() {
    const newSection = {
      name: `Section ${this.sections.length + 1}`,
      layout: 'one-columns',
      rows: [
        {
          columns: [
            {
              components: []
            }
          ]
        }
      ],
      location: this.sections.length + 1
    };
    this.sections.push(newSection);
  }

  editlayoutSection(item_section: any, item_layout: any) {
    console.log(`Item Section: ${item_section.layout}, Item Layout: ${item_layout.layout}`);
    this.sections.forEach((itemSection: any) => {
      if (itemSection.name === item_section.name) {
        itemSection.layout = item_layout.layout;
        const ItemColumns = this.generateComponent_Columns(item_layout.type, item_section);
        itemSection.rows[0].columns = ItemColumns;
      }
    });
  }

  generateComponent_Columns(quantity: number, Item: any) {
    const ItemColumns = [];
    for (let i = 0; i < quantity; i++) {
      const object = { components: [] };
      ItemColumns.push(object);
    }
    return ItemColumns;
  }

  removeSection(section: any) {
    this.sections = this.sections.filter(s => s !== section);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.updateSectionLocations();
  }

  updateSectionLocations() {
    this.sections.forEach((section, index) => {
      section.location = index + 1;
    });
  }

  getLayoutClass(layout: string) {
    return layout; // You can implement logic to return CSS classes based on layout
  }
}
