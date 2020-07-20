import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kw-how-it-works',
  templateUrl: './how-it-works.component.html',
})

export class HowItWorksComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
