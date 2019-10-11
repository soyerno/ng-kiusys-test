import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: any;
  @Input() content: any;
  @Output() closeModal = new EventEmitter();

  public close() {
    this.closeModal.emit(event);
  }

  constructor() {}

  ngOnInit() {}
}
