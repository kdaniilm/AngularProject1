import { Component, OnInit } from '@angular/core';
import { SetColorService } from '../shared/services/set-color-service';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {

  public colors = ["red", "green", "blue", "pink"];

  constructor(private colorService: SetColorService) { }

  ngOnInit(): void {
  }

  public setColor(color: any){
    color = color.value;
    if(color != null){
    this.colorService.color = color;
    }
  }
}
