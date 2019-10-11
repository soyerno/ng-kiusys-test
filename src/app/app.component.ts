import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

import {
  GridType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  CompactType
} from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private imageSvc: ImagesService) {}

  imageList = this.imageSvc.getImageList();
  isModalOpen = false;
  selectedImage: {
    title: '';
    url: '';
  };

  //gridster2
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  private itemChange(item, itemComponent) {
    // console.info('itemChanged', item, itemComponent);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal(item) {
    this.isModalOpen = true;
    this.selectedImage = item;
  }

  ngOnInit() {
    this.options = {
      displayGrid: DisplayGrid.None,
      gridType: GridType.Fit,
      compactType: CompactType.CompactUpAndLeft,
      draggable: {
        enabled: true
      },
      itemChangeCallback: this.itemChange,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1
    };
  }
}
