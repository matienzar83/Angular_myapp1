import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/Leader';

import { LeaderService } from '../services/Leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
		@Input()
	leader = LEADERS;

	 constructor(private leaderservice: leaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.leader = this.leaderservice.getleader(id);
  }

  goBack(): void {
    this.location.back()

  constructor() { }

  ngOnInit() {
  }

}
