import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormationService } from "app/shared/services/formation.service";
import { Formation } from "app/shared/models/formation";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-formation-list-container',
  templateUrl: './formation-list-container.component.html',
  styleUrls: ['./formation-list-container.component.css']
})
export class FormationListContainerComponent implements OnInit, OnDestroy {
  formations: Array<Formation> = [];
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
    if (confirm('do you want delete this formation')){
      let sub = this.formationService.remove(id).subscribe(data => {
        this.fetch();
      })
      this.sub.push(sub);
    }
  }


  ngOnDestroy() {
    if (this.sub) {
      this.sub.map(d => {
        d.unsubscribe();
      });
    }
  }


}
