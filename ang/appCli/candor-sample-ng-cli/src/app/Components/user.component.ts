import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Observable";
//our root app component
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IWarehouse } from '../Model/IWarehouse';
@Component({
    selector: 'my-app',
    providers: [UserService],
    template: `

 
   <form [formGroup]="myForm">
    <table formArrayName="warehouses">
      <tr>
        <th>Territory Code</th>
        <th>Warehouse Code</th>
      </tr>
     <tr *ngFor="let warehouse of myForm.controls.warehouses.controls; let i=index">
        <div [formGroupName]="i">
          <td><input formControlName="territoryCode" /></td>
          <td><input formControlName="warehouseCode" /></td>
        </div> 
    </tr>
      
</table>
    </form>
     
  `,
})
export class UserComponent {
      warehouses: IWarehouse[];
      myForm: FormGroup;
       

    constructor(private service: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      warehouses: this.fb.array([])
    })
    //    //this.service.getData()
    //    //    .subscribe(data => {
    //    //        this.warehouses = data;
    //    //          this.setWarehouses()
    //    //    })
        this.service.get("http://localhost:51679/api/userapi/")
            .subscribe(data => {
                this.warehouses = data;
                this.setWarehouses()
                   
             })
     } 
             setWarehouses(){ 
                let control = <FormArray>this.myForm.controls['warehouses'];
                this.warehouses.forEach(x => {
                control.push(this.fb.group({territoryCode: x.TerritoryCode, warehouseCode: x.WarehouseCode}))
    })
  }
     
}
