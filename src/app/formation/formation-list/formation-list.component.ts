import { Observable } from 'rxjs/Observable';
import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: Array<Formation> = [];
  formation: Formation = new Formation();
sub: Array<Subscription> = [];

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    let sub = this.formationService.fetch().subscribe(data => {
      this.formations = data;
    })
    this.sub.push(sub);
  }


  delete(id) {
    let sub = this.formationService.remove(id).subscribe(data => {
      this.fetch();
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
