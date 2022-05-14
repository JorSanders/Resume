import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'resume-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  private browserLanguage: readonly string[];
  private isDutch: boolean;

  constructor(private translate: TranslateService, private titleService: Title, private meta: Meta) {
    translate.setDefaultLang('nl');
    this.browserLanguage = navigator.languages
    this.isDutch = this.browserLanguage.find(l => l.split('-', 1)[0].toLowerCase() === "nl") !== undefined;
    if (!this.isDutch) {
      translate.use('en')
    }

    this.translate.get('resume.meta.title').subscribe((title: string) => {
      this.titleService.setTitle(title)
    });

    this.translate.get('resume.meta.description').subscribe((desc: string) => {
      this.meta.updateTag({ name: 'description', content: desc })
    });
  }

  ngOnInit(): void {
  }
}
