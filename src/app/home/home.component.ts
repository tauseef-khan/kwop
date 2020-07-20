import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';

@Component({
  selector: 'kw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(HowItWorksComponent);
  }
}
