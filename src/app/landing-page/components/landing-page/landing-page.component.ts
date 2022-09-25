import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }
  userEmail!: string;
  username:string='admin';

  ngOnInit(): void {
  }

  onContinue():void{
    this.router.navigateByUrl('facesnaps')
  }

  /*old */
  // onSubmitForm() {
  //   console.log(this.userEmail +'</br>'+ this.username);
  // }

  /* New */
  onSubmitForm(form: NgForm) {
    // this.username=form.value.name;
    // this.userEmail=form.value.emial;
    console.log(form.value);
  }

}
