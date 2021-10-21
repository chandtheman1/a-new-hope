import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CharacterListService } from 'src/app/services/character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  charactersApi: any = [];
  characters: any = [];
  constructor(private characterListService: CharacterListService, private router: Router) { }

  ngOnInit(): void {
    this.characterListService.getMovie().subscribe((data) => {                      // API Observable returns Movie details of A New Hope including an array of characters APIs
      this.charactersApi = data.characters;
      
      this.charactersApi.map((item: any) => { 
        const characterId = { id: item.split('/')[5]}                               // Pulls the number "1" from "https://swapi.dev/api/people/1/" and assigns it to data object

        this.characterListService.getCharacter(item).subscribe((data) => {          // Second API Observable returns character details from the array of characters APIs
          const newData = Object.assign(characterId, data)                          // Assigns the ID to the character according to the api link
          this.characters.push(newData);
        })
      });

    })

  }
  // button for on click routing
  onSelect(characterId: any) {
    this.router.navigate(['/character', characterId])
  }

  
}
