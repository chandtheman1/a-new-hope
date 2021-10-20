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
    this.characterListService.getMovie().subscribe((data) => {
      this.charactersApi = data.characters;
      
      this.charactersApi.map((item: any) => { 
        // console.log(item);
        // Pulls the number from "https://swapi.dev/api/people/1/" and assigns it to data object
        const characterId = { id: item.split('/')[5]}
        // console.log(characterId);
        this.characterListService.getCharacter(item).subscribe((data) => { 
          // console.log(data);
          // console.log(Object.assign(characterId, data))
          const newData = Object.assign(characterId, data)
          this.characters.push(newData);
        })
      });

    })

  }

  onSelect(characterId: any) {
    this.router.navigate(['/character', characterId])
  }

  
}
