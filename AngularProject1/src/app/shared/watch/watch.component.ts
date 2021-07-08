import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  public title = "long long title";
  public footer = "long long long footer";
  public time = new Date();
  constructor() { }

  ngOnInit(): void {
    this.launchWatch();
  }

  launchWatch(){
    setInterval(() => this.time = new Date());
  }
}
