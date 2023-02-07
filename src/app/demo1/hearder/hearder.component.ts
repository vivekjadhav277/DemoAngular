import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DemoService } from "../../services/demo.service";

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
  // providers:[DemoService]
})
export class HearderComponent implements OnInit {

  and?:string;

  constructor( private abc: DemoService, private route:Router ) { }

  ngOnInit(): void {
  }


  homePage(){
    this.abc.data1 = 'abc'

    this.route.navigate(['test-error'], {
      queryParams: {
        test: 'test',
        test1: 'test',
        test2: 'test',
        test3: 'test',
        test4: 'test',
        test5: 'test',
      }
    })

  }

}
