import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { RiderType } from '../model/Rider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {
  addRide : RiderType = new RiderType();
  isSbumit : boolean;
  isAdded: boolean;
  ribionData: any;
  currentArray: any = [""];
  profileForm = this.fb.group({
    employeeId: ['',Validators.required],
    vehicleType: [''],
    vehicleNo: ['',Validators.required],
    vehicleSeat: ['',Validators.required],
    pickUpTime: [''],
    dropTime: [''],
    pickUpPoint: ['',Validators.required],
    dropPoint: ['',Validators.required],
  });
  
  constructor(private fb: FormBuilder,private route: Router) { }

  ngOnInit() {
  }
  onSubmit(){
   
   this.isSbumit = true;
   let localStorageData: RiderType[];
   localStorageData = JSON.parse(localStorage.getItem('riderData'));
   let ifExist = localStorageData.some((value)=> { return value.employeeId == this.profileForm.value.employeeId });
   let currentArray = [""];
   if(localStorage.getItem('currentAddRiderArray')){
    currentArray = JSON.parse(localStorage.getItem('currentAddRiderArray'));
   }
   
   let localExist = currentArray.some((value)=> { return value == this.profileForm.value.employeeId});
   if(!localExist){
    currentArray.push(this.profileForm.value.employeeId);
    localStorage.setItem('currentAddRiderArray',JSON.stringify(currentArray));
   } 
   
   console.log(this.profileForm.valid,ifExist,localExist);
   if(this.profileForm.valid && (!ifExist && !localExist)){
    this.isAdded = true;
    
    localStorageData.push(this.profileForm.value);
    localStorage.setItem('riderData',JSON.stringify([]));
    localStorage.setItem('riderData',JSON.stringify(localStorageData));

    this.ribionData = "Rider Added";
    this.removeRibion(this.profileForm.valid);
    
   }else{
    this.isAdded = false;
    this.ribionData = "Check the Data , Employee ID should be unique";
    this.removeRibion(this.profileForm.valid);
   }
   //this.route.navigateByUrl('search');
  }

  removeRibion(valid){
    setTimeout(()=>{
      this.ribionData = '';
      this.isAdded = false;
      this.isSbumit = false;
      if(valid) this.addRide = new RiderType();
    },3000)
  }
  clearRider(){
    this.addRide = new RiderType();
  }
}
