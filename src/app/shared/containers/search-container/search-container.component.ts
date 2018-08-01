import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { SyntaxService } from '../../../services/syntax.service';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchOpen: boolean;
  searchString: string;
  results = <any>[];

  constructor(private uiService: UiService, private syntaxService: SyntaxService) { }

  ngOnInit() {
    this.uiService.searchOpen
      .subscribe(status => {
        this.searchOpen = status;
      });

    this.uiService.searchString
      .subscribe(searchString => {
        this.searchString = searchString;
        this.syntaxService.search(this.searchString)
          .subscribe(results => {
            this.results = results;
          });
      });
  }
}
