import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { SyntaxService } from '../../../services/syntax.service';
import { debounceTime, tap } from 'rxjs/operators';

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
  pageError: string;

  constructor(private uiService: UiService, private syntaxService: SyntaxService) {
  }

  ngOnInit() {
    this.uiService.searchOpen
      .subscribe(status => {
        this.results = [];
        this.searchOpen = status;
      });

    this.uiService.searchString
      .pipe(
        tap(() => this.loading = true),
        debounceTime(250)
      )
      .subscribe(searchString => {
        this.results = [];
        this.searchString = searchString;
        this.syntaxService.search(this.searchString)
          .subscribe(results => {
            this.loading = false;
            this.results = results.data;
          },
          err => {
            this.loading = false;
            this.pageError = err.status;
          }
        );
      });
  }
}
