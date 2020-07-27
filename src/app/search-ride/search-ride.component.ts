import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { RiderType } from '../model/Rider';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.css']
})
export class SearchRideComponent implements OnInit {
  riders : any;
  currentHr : any;
  ribionData: string = '';
  isAdded: boolean;
  isConfirmed: boolean;
  empId: string = '';
  bookerArray: any;;
  bookerRide: RiderType[] = [];
  isBooker : boolean;
  filterBike = false;
  filterCar = false;
  filterAll= false;
  constructor(private riderData : DataServiceService) { 
    
  }

  ngOnInit() {
    if(!localStorage.getItem('riderData')){
      this.riders = this.riderData.getData();
      localStorage.setItem('riderData',JSON.stringify(this.riders));
    }else{
      this.riders = JSON.parse(localStorage.getItem('riderData'));
      localStorage.setItem('riderData',JSON.stringify(this.riders));
    }
    //localStorage.setItem('riderData',JSON.stringify(this.riders));
    //this.riderAll = this.riders; 
    this.checkForbufferTime(this.riders);
   
   
  }

  /*****  Buffer check for 1 hour.  *********/

  checkForbufferTime(rider){
    let date = new Date();
    let currenthour = date.getHours();
    this.currentHr = currenthour;

    console.log(this.riders,rider,currenthour);
    
    this.riders = rider.filter((data)=>{
      if(data.vehicleSeat>0){
        if((currenthour-1 == data.pickUpTime) || (currenthour-1 == data.dropTime)){
          return data;
        }if( (currenthour  == data.pickUpTime) || ( currenthour == data.dropTime)){
          return data;
        }if ((currenthour +1 == data.pickUpTime) ||(currenthour +1 == data.dropTime)){
          return data;
        }
      }
      
    });
    console.log(this.riders,currenthour);
  }

 /*****  To Book a RIDE  *********/

  bookRide(ride){
    this.isBooker = true;
    let dataExist = this.bookerRide.some((value)=>{
      return value.employeeId == ride.employeeId
    })
    if(!dataExist && this.bookerRide.length == 0)this.bookerRide.push(ride);
  }

  clearRibiion(){
    setTimeout(()=>{
      this.isAdded = false;
      this.ribionData='';
      this.isConfirmed= false;
      this.empId ='';
      //this.isBooker = false;
    },3000)
  }
 
  bookRiderEmp(ride){
    this.isConfirmed = true;
    let localRiderData = JSON.parse(localStorage.getItem('riderData'));
    let bookerArray  = [""]
    if(localStorage.getItem('bookerArray')){
       bookerArray =  JSON.parse(localStorage.getItem('bookerArray'));
    }
    
    let BookerisExist = bookerArray.some((data)=> {
      return data == this.empId
    })
    let riderExist = localRiderData.some((data)=> {
      return data.employeeId == this.empId;
    })
    if(riderExist || BookerisExist){
      this.ribionData = `${this.empId} Empolyee ID already have a ride`;
      this.isAdded = false;
      this.clearRibiion();
    }else{
      bookerArray.push(this.empId)
      localStorage.setItem('bookerArray',JSON.stringify(bookerArray));
      console.log(ride);
      this.ribionData = "Booking Done";
      this.isAdded = true;
      this.clearRibiion();
      this.isBooker = false;
      this.bookerRide = [];
      this.riders.forEach((element,index) => {
        if(element.employeeId == ride.employeeId){
            if(ride.vehicleSeat > 1){
              element.vehicleSeat = ride.vehicleSeat - 1;
              this.setViewlocalStorage(localRiderData,element);
            }else{
              this.riders.splice(index,1);
              this.removeStoredData(element,localRiderData);
            }
          }
      });

    }
    
  }
  setViewlocalStorage(localRiderData, changedObject){
    localRiderData.forEach((element,index) => {
      if(element.employeeId == changedObject.employeeId){
        element=changedObject;
      }
    })
  }

  // delete record from localStorage.
  removeStoredData(record,localRiderData){
    localRiderData.forEach((element,index) => {
      if(element.employeeId == record.employeeId){
        localRiderData.splice(index,1);
      }
    });
    localStorage.setItem('riderData',JSON.stringify([]));
    localStorage.setItem('riderData',JSON.stringify(localRiderData));
  }
  /*****  Filter by CAR/BIKE/ALL *********/
  
  filterBy(filtertype){
    filtertype(this);
  }

  bike(that){
    let localRiderData = JSON.parse(localStorage.getItem('riderData'));
    that.filterBike = true;
    that.filterCar = false;
    that.filterAll = false;
    localRiderData = localRiderData.filter(data=>{
      return data.vehicleType == "bike";
    });
    that.checkForbufferTime(localRiderData);
    console.log('bike',localRiderData); 
  }
  car(that){
    let localRiderData = JSON.parse(localStorage.getItem('riderData'));
    that.filterBike = false;
    that.filterCar = true;
    that.filterAll = false;
    localRiderData = localRiderData.filter(data=>{
      return data.vehicleType == "car";
    })
    that.checkForbufferTime(localRiderData);
    console.log('car',localRiderData); 
  }
  all(that){
    let localRiderData = JSON.parse(localStorage.getItem('riderData'));
    that.filterBike = false;
    that.filterCar = false;
    that.filterAll = true;
    
    that.checkForbufferTime(localRiderData);
    console.log('all',that.riders); 
  }
}
