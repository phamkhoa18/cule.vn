import { Component, Input, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() node: any

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['node'] && changes['node'].currentValue) {
      this.dataSource.data = changes['node'].currentValue;
    }
  }

  onNodeClick (value: any) {
    console.log(value);

  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
