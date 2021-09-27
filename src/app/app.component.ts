import { Component, OnInit, VERSION } from '@angular/core';
declare var DocsAPI: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public myConfig = {
    editorConfig: {
      document: {
        fileType: 'docx',
        info: {
          author: 'Arun',
          created: '26.11.19',
        },
        key: '651231321',
        permissions: {
          download: true,
          edit: true,
        },
        title: 'CSR',
        url: 'https://business.esa.int/sites/default/files/RD%20Template_2.4.docx',
      },
      documentType: 'word',
      editorConfig: {
        customization: {
          logo: {
            image: 'https://www.zyliq.ai/images/zyliq-logo.png',
            imageEmbedded: 'https://www.zyliq.ai/images/zyliq-logo.png',
            url: 'https://www.zyliq.ai/',
          },
          chat: false,
          about: false,
          hideRightMenu: true,
          macros: false,
          plugins: false,
          help: false,
        },
        // user: {
        //   group: 'Author',
        //   id: '1',
        //   name: 'Arun Prabhakar'
        // },
        embedded: {
          embedUrl:
            'https://business.esa.int/sites/default/files/RD%20Template_2.4.docx',
          saveUrl:
            'https://business.esa.int/sites/default/files/RD%20Template_2.4.docx',
          shareUrl:
            'https://business.esa.int/sites/default/files/RD%20Template_2.4.docx',
          toolbarDocked: 'top',
        },
        lang: 'en',
        mode: 'edit',
      },
      events: {
        // tslint:disable-next-line: no-console
        onBack: console.log,
        // tslint:disable-next-line: no-console
        onDocumentStateChange: console.log,
        // tslint:disable-next-line: no-console
        onError: console.log,
        // tslint:disable-next-line: no-console
        onReady: console.log,
        // tslint:disable-next-line: no-console
        onRequestEditRights: console.log,
        // tslint:disable-next-line: no-console
        onSave: console.log,
      },
      height: '100%',
      type: 'desktop',
      width: '100%',
    },
    script:
      'ec2-65-0-206-202.ap-south-1.compute.amazonaws.com:4480/web-apps/apps/api/documents/api.js',
  };

  ngOnInit() {}
}
