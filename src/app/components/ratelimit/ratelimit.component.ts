import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { RateLimitService } from 'src/app/services/ratelimit.service';

@Component({
  selector: 'app-ratelimit',
  templateUrl: './ratelimit.component.html',
  styleUrls: ['./ratelimit.component.css']
})
export class RateLimitComponent implements OnInit {

  public clicks: string[] = [];

  constructor(private service: RateLimitService) { }

  ngOnInit(): void {
    this.service.rateLimit(fromEvent(document, 'mousedown'), 1).subscribe(() => {
      this.clicks.push('clicked');
    })
  }

}
