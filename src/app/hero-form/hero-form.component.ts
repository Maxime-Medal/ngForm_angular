import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  myHero =  new Hero(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero( 18, 'Dr IQ', this.powers[0], 'Chuck Overstreet' );

  submitted = false;

  newHero() {
    this.model = new Hero(42, '', '');
  }

  constructor( ) {
   }

  onSubmit() { this.submitted = !this.submitted; }

  ngOnInit(): void {
  }

                       

}
