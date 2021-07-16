import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct)
        this.router.navigate(['./admin/products'])
      })
    }
  }

  uploadFile(event: any){
    const file = event.target.files[0];
    const dir = 'images2';
    const fileRef = this.storage.ref(dir)
    const task = this.storage.upload(dir, file)

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe((url: string) => {
          this.form.get('image')?.setValue(url)
        })
      })
      
    ).subscribe()
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id         : [ '', [Validators.required]],
      title      : [ '', [Validators.required]],
      price      : [ 0 , [Validators.required]],
      image      : '',
      description: [ '', [Validators.required]]
    })
  }

}
