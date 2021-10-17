import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListService } from 'src/app/services/character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  charactersApi: any = [];
  characters: any = ['hello'];
  // url: any = ['https://swapi.dev/api/people/1', 'https://swapi.dev/api/people/2']
  url: any = 'https://swapi.dev/api/people/1'
  constructor(private characterListService: CharacterListService) { }

  ngOnInit(): void {
    // this.getCharacterApi()
    // this.getCharacters(this.url)
    this.getCharacters(this.url);

  }

  getCharacterApi() {
    this.characterListService.getMovie().subscribe((characters) => {
      this.charactersApi = characters.characters;
    });
  }

  // getCharacters(array: any) {
  //   array.map( (item: any) => {
  //     const characterDetail = this.characterListService.getCharacter(item)
  //     this.characters.push(characterDetail)
  //   })
  // }

  // getCharacters(array: any) {

  //   array.map((item: any) => {
  //     this.characterListService.getCharacter(item).subscribe((character) => {
  //       this.characters = character
  //     })
  //   })
    
  // }
  
  getCharacters(url: any) {
    this.characters = this.characterListService.getCharacter(url).subscribe((character) => character.name)
  }
}
