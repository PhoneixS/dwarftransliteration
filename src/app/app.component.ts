import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dwarf Transliteration';

  public hasImage(characters: string): boolean {
    switch (characters.toLowerCase()) {

      case 'p':
      case 'l':
      case 'e':
      case 'b':
      case 'z':
      case 'lh':
      case 'ê':
      case 'f':
      case 'k':
      case 'c':
      case 'q':
      case 'nd':
      case 'a':
      case 'v':
      case 'g':
      case 'h':
      case 'â':
      case 'á':
      case 'hw':
      case 'kh':
      case 'ʻ':
      case 'o':
      case 'm':
      case 'gh':
      case 'ŋ':
      case 'ô':
      case 'mb':
      case 'n':
      case 'ng':
      case 'ö':
      case 't':
      case 'kw':
      case 'nj':
      case 'n':
      case 'd':
      case 'gw':
      case 'i':
      case 's':
      case 'th':
      case 'khw':
      case 'y':
      case 'dh':
      case 'ghw':
      case 'hy':
      case 'r':
      case 'ngw':
      case 'u':
      case 'ch':
      case 'nw':
      case 'û':
      case 'j':
      case 'w':
      case '+h':
      case '.':
      case 'sh':
      case 'zh':
      case 'ü':
      case '&':
        return true;

      default:
        return false;
    }
  }

}
