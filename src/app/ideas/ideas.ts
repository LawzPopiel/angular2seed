import {Component} from '@angular/core';

@Component({
  selector: 'ideas',
  styleUrls: ['./ideas.css'],
  templateUrl: './ideas.html'
})
export class Ideas {
    private baseSportsIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/sports/";
    private baseIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/16/";

    private sportsIconUrl(imageName: string): string {
        return this.baseSportsIconUrl + imageName + ".png";
    }

    private iconUrl(imageName: string): string {
        return this.baseIconUrl + imageName + ".png";
    }
    
    public listItems: Array<{ text: string, value: number }> = [
        { text: "Foo", value: 1 },
        { text: "Bar", value: 2 },
        { text: "Baz", value: 3 }
    ];

    ptiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
