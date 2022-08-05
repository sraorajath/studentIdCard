import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['add-institution.component.scss']
})
export class AddInstitutionComponent implements OnInit {

  public instLogo = '';
  public designImg = '';
  public principalSig = '';
  addInstitutionForm: FormGroup;
  // @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addInstitutionForm = this.fb.group({
      institution_name: ['', [Validators.required]],
      contact_number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      institution_logo: ['', [Validators.required]],
      background_image: ['', [Validators.required]],
      pricipal_signature: ['', [Validators.required]]
    });
  }

  get addInstitutionFormControls() {
    return this.addInstitutionForm.controls;
  }

  selectFile(imgFile, type) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      Array.from(imgFile.target.files).forEach((file: File) => {
        switch(type) {
          case 'institution_logo':
            this.addInstitutionForm.controls['institution_logo'].setValue(file.name);
            break;
          case 'background_image':
            this.addInstitutionForm.controls['background_image'].setValue(file.name);
            break;
          case 'pricipal_signature':
            this.addInstitutionForm.controls['pricipal_signature'].setValue(file.name);
        }
      });
      // Reset if duplicate image uploaded again
      // this.fileInput.nativeElement.value = "";
    } else {
      this.instLogo = '';
    }
  }

  removeAttachment(e, type) {
    e.preventDefault();
    switch(type) {
      case 'institution_logo':
        this.addInstitutionForm.controls['institution_logo'].setValue('');
        break;
      case 'background_image':
        this.addInstitutionForm.controls['background_image'].setValue('');
        break;
      case 'pricipal_signature':
        this.addInstitutionForm.controls['pricipal_signature'].setValue('');
        break;
    }
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