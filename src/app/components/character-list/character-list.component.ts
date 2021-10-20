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
  characters: any = [];
  constructor(private characterListService: CharacterListService) { }

  ngOnInit(): void {
    this.characterListService.getMovie().subscribe((data) => {
      this.charactersApi = data.characters;
      
      this.charactersApi.map((item: any) => { 
        // console.log(item);
        this.characterListService.getCharacter(item).subscribe((data) => { 
          console.log(data);
          this.characters.push(data);
        })
      });

    })

  }

  

  
}
