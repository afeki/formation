import { FormationService } from './../../shared/services/formation.service';
import { Formation } from './../../shared/models/formation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {

  formation: Formation;
  sub: Array<Subscription> = [];
  id: any;

  constructor(private formationService: FormationService, private route: ActivatedRoute) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);
    });
    this.sub.push(sub);
  }

  ngOnInit() {
    this.formation = new Formation();
    if (this.id) {
      this.find(this.id);
    }
  }

  add(form: NgForm) {
    console.log('form', form.value);
    // form.reset();
    const title = form.value.title;
    const description = form.value.description;
    let model: Formation = new Formation();
    model.title = title;
    model.description = description;
    if(this.id){
      model.id = this.id;
      this.update(this.id, model);
    } else {
      this.saveservice(model);
    }

  }

  find(id) {
    let sub = this.formationService.find(id).subscribe(data => {
      this.formation = data;
    })
    this.sub.push(sub);
  }


   update(id, model) {
    let sub = this.formationService.put(id, model).subscribe(data => {
      this.formation = data;
    })
    this.sub.push(sub);
  }

     saveservice(model) {
    let sub = this.formationService.save(model).subscribe(data => {
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
