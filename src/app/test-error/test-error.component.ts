import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  constructor(private abc: DemoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log('data',this.activatedRoute.snapshot.data,
    this.activatedRoute.snapshot.queryParams
    );
    
    this.abc.data1 = this.abc.data1+ '6532465234'
    console.log('this.abc.data',this.abc.data1);
    
  }

}
