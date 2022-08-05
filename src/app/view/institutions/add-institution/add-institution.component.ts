import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['add-institution.component.scss']
})
export class AddInstitutionComponent implements OnInit {

  fileAttr = '';
  public instLogo = '';
  public designImg = '';
  public principalSig = '';
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  selectFile(imgFile, type) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      // this.instLogo = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        switch(type) {
          case 'institution_logo':
            // this.instLogo = '';
            this.instLogo = file.name;
            break;
          case 'background_image':
            // this.designImg = '';
            this.designImg = file.name; 
            break;
          case 'pricipal_signature':
            // this.principalSig = '';
            this.principalSig = file.name;
        }
        // this.instLogo += file.name ;
      });
      
      // Reset if duplicate image uploaded again
      // this.fileInput.nativeElement.value = "";
    } else {
      this.instLogo = '';
    }
  }

  removeAttachment(e) {
    // e.preventDefault();
    this.instLogo = '';
  }
}

// HTML5 FileReader API
      // let reader = new FileReader();
      // reader.onload = (e: any) => {
      //   let image = new Image();
      //   image.src = e.target.result;
      //   image.onload = rs => {
      //     let imgBase64Path = e.target.result;
      //     console.log(imgBase64Path);
      //     this.dataimage = imgBase64Path;
      //   };
      // };
      // reader.readAsDataURL(imgFile.target.files[0]);