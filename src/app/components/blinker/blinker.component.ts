import { Component, OnInit } from '@angular/core';
import { BlinkerService } from 'src/app/services/blinker.service';

@Component({
  selector: 'app-blinker',
  templateUrl: './blinker.component.html',
  styleUrls: ['./blinker.component.css']
})
export class BlinkerComponent implements OnInit {

  public text = '';

  constructor(private service: BlinkerService) {}

  ngOnInit(): void {
    this.service.isLit().subscribe(lit => this.text = lit ? 'X' : '');
  }
}
