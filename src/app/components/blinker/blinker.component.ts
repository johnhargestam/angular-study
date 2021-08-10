import { Component, OnInit } from '@angular/core';
import { BlinkerService } from 'src/app/services/blinker.service';

@Component({
  selector: 'app-blinker',
  templateUrl: './blinker.component.html',
  styleUrls: ['./blinker.component.css']
})
export class BlinkerComponent implements OnInit {

  public text = '';

  constructor(private blinkerService: BlinkerService) {}

  ngOnInit(): void {
    this.blinkerService.isLit().subscribe(lit => this.text = lit ? 'X' : '');
  }
}
