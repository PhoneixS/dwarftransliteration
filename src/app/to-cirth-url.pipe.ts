import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCirthUrl'
})
export class ToCirthUrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    switch (value.toLowerCase()) {

      case 'p': return 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Certh_1.svg';

      case 'l': return 'https://upload.wikimedia.org/wikipedia/commons/6/69/Certh_31.svg';

      case 'e': return 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Certh_46.svg';

      case 'b': return 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Certh_2.svg';

      case 'z': return 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Certh_17.svg';

      case 'lh': return 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Certh_32.svg';

      case 'ê': return 'https://upload.wikimedia.org/wikipedia/commons/9/97/Certh_47.svg';

      case 'f': return 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Certh_3.svg';

      case 'k':
      case 'c':
      case 'q':
        return 'https://upload.wikimedia.org/wikipedia/commons/6/60/Certh_18.svg';

      case 'nd': return 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Certh_33.svg';

      case 'a': return 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Certh_48.svg';

      case 'v': return 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Certh_4.svg';

      case 'g': return 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Certh_19.svg';

      case 'h': return 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Certh_34.svg';

      case 'â':
      case 'á':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Certh_49.svg';

      case 'hw': return 'https://upload.wikimedia.org/wikipedia/commons/6/62/Certh_5.svg';

      case 'kh': return 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Certh_20.svg';

      case 'ʻ': return 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Certh_35.svg';

      case 'o': return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Certh_50.svg';

      case 'm': return 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Certh_6.svg';

      case 'gh': return 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Certh_21.svg';

      case 'ŋ': return 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Certh_36.svg';

      case 'ô': return 'https://upload.wikimedia.org/wikipedia/commons/6/61/Certh_51.svg';

      case 'mb': return 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Certh_7.svg';

      case 'n': return 'https://upload.wikimedia.org/wikipedia/commons/9/95/Certh_22.svg';

      case 'ng': return 'https://upload.wikimedia.org/wikipedia/commons/0/02/Certh_37.svg';

      case 'ö': return 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Certh_52.svg';

      case 't': return 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Certh_8.svg';

      case 'kw': return 'https://upload.wikimedia.org/wikipedia/commons/2/26/Certh_23.svg';

      case 'nj': return 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Certh_38.svg';

      case 'n': return 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Certh_53.svg';

      case 'd': return 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Certh_9.svg';

      case 'gw': return 'https://upload.wikimedia.org/wikipedia/commons/9/95/Certh_24.svg';

      case 'i': return 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Certh_39.svg';

      case 's': return 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Certh_54.svg';

      case 'th': return 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Certh_10.svg';

      case 'khw': return 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Certh_25.svg';

      case 'y': return 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Certh_40.svg';

      case 'dh': return 'https://upload.wikimedia.org/wikipedia/commons/0/07/Certh_11.svg';

      case 'ghw': return 'https://upload.wikimedia.org/wikipedia/commons/3/39/Certh_26.svg';

      case 'hy': return 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Certh_41.svg';

      case 'r': return 'https://upload.wikimedia.org/wikipedia/commons/4/40/Certh_12.svg';

      case 'ngw': return 'https://upload.wikimedia.org/wikipedia/commons/6/65/Certh_27.svg';

      case 'u': return 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Certh_42.svg';

      case 'ch': return 'https://upload.wikimedia.org/wikipedia/commons/1/12/Certh_13.svg';

      case 'nw': return 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Certh_28.svg';

      case 'û': return 'https://upload.wikimedia.org/wikipedia/commons/8/82/Certh_43.svg';

      case 'j': return 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Certh_29.svg';

      case 'w': return 'https://upload.wikimedia.org/wikipedia/commons/7/70/Certh_44.svg';

      case '+h':
      case '.':
        return 'https://upload.wikimedia.org/wikipedia/commons/1/17/Certh_59.svg';

      case 'sh': return 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Certh_15.svg';

      case 'zh': return 'https://upload.wikimedia.org/wikipedia/commons/9/99/Certh_30.svg';

      case 'ü': return 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Certh_45.svg';

      case '&': return 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Certh_60.svg';

      default:
        return '';
    }

  }

}
