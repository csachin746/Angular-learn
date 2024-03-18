import { Component, Input, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input('ParentData')
  public personName="";
  @Input() all:number =0;
  @Input() inStock: number = 0;
  @Input() outofStock: number = 0;

  @Output() seletedFilterRadioButtonChanged : EventEmitter<string> = new EventEmitter();
  seletedFilterRadioButton :string = "all";

  ngOnInit(): void {
  }

  onSeletedFiltedRadioButton(){
    console.log(this.seletedFilterRadioButton);
    this.seletedFilterRadioButtonChanged.emit(this.seletedFilterRadioButton);
  }

}
