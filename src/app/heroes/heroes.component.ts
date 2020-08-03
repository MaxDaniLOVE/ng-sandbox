import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) { // TODO remove if necessary
      this.selectedHero = null; 
    } else {
      this.selectedHero = hero;
      this.messageService.add(`Selected ${hero.name}`);
    }
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
