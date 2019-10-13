import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-route',
  templateUrl: './side-route.component.html',
  styleUrls: ['./side-route.component.scss']
})
export class SideRouteComponent implements OnInit {

  constructor(router: Router, route: ActivatedRoute) {
    
    route.paramMap.subscribe(params => {
      console.log(params)
      console.log(router.routerState.snapshot);
    })
   }

  ngOnInit() {
    // this.router
  }

}
