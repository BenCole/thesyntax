import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { SyntaxService } from '../../../services/syntax.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchOpen: boolean;
  searchString: string;
  results = <any>[];
  loading: boolean;

  constructor(private uiService: UiService, private syntaxService: SyntaxService) { }

  ngOnInit() {
    this.uiService.searchOpen
      .subscribe(status => {
        this.results = [];
        this.searchOpen = status;
      });

    this.uiService.searchString
      .pipe(debounceTime(250))
      .subscribe(searchString => {
        this.results = [];
        this.loading = true;
        this.searchString = searchString;
        this.syntaxService.search(this.searchString)
          .subscribe(results => {
            this.results = results;
            this.loading = false;
          });
      });
  }
}
