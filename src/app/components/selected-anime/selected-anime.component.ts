import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit {
  
  anime_selected: MyAnime[] =[];
  
  constructor(private animeService: AnimeService){}

  ngOnInit(): void {
    this.anime_selected = JSON.parse(localStorage.getItem('my_anime') as any) || [];
    
    this.animeService.getAnimeSelected().subscribe(anime =>{
       this.anime_selected.push(anime);
       localStorage.setItem('my_anime', JSON.stringify(this.anime_selected));
    })
  }

  increaseWatch(anime:MyAnime){
    anime.wachted_episodes++;
    localStorage.getItem('my_anime');
    localStorage.setItem('my_anime', JSON.stringify(this.anime_selected));

  }

  decreaseWachted(anime: MyAnime){
    anime.wachted_episodes--;
    localStorage.setItem('my_anime', JSON.stringify(this.anime_selected));

  }
}
