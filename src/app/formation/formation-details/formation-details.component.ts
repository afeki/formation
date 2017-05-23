import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Formation } from './../../shared/models/formation';

import { FormationService } from './../../shared/services/formation.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit, OnDestroy {
  formation: Formation;
  sub: Array<Subscription> = [];
  id: any;

  constructor(private formationService: FormationService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);

    });
  }

  ngOnInit() {
    if (this.id) {
      this.find(this.id);
    }
  }

  find(id) {
    let sub = this.formationService.find(id).subscribe(data => {
      this.formation = data;
    })
    this.sub.push(sub);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.map(d => {
        d.unsubscribe();
      });

    }
  }
}
