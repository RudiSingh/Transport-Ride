import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiderType } from '../model/Rider';
import { RiderDataType } from '../model/Data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  riderRecord : RiderType[];//any;//Observable<RiderType[]>;
  constructor(private rdt : RiderDataType) { 
    this.riderRecord = rdt.riderRecord;
    // [
    //   {
    //     employeeId:"1",
    //     vehicleType:"bike",
    //     vehicleNo:"MH01",
    //     vehicleSeat:"1",
    //     pickUpTime:"9",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"2",
    //     vehicleType:"bike",
    //     vehicleNo:"MH02",
    //     vehicleSeat:"1",
    //     pickUpTime:"10",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"3",
    //     vehicleType:"bike",
    //     vehicleNo:"MH03",
    //     vehicleSeat:"1",
    //     pickUpTime:"11",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"4",
    //     vehicleType:"bike",
    //     vehicleNo:"MH04",
    //     vehicleSeat:"1",
    //     pickUpTime:"12",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"5",
    //     vehicleType:"bike",
    //     vehicleNo:"MH05",
    //     vehicleSeat:"1",
    //     pickUpTime:"13",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"6",
    //     vehicleType:"car",
    //     vehicleNo:"MH06",
    //     vehicleSeat:"3",
    //     pickUpTime:"14",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"7",
    //     vehicleType:"car",
    //     vehicleNo:"MH07",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"17",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"8",
    //     vehicleType:"car",
    //     vehicleNo:"MH08",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"20",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"9",
    //     vehicleType:"car",
    //     vehicleNo:"MH09",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"21",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"10",
    //     vehicleType:"car",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"22",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   //extra
    //   {
    //     employeeId:"11",
    //     vehicleType:"car",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"23",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },{
    //     employeeId:"12",
    //     vehicleType:"car",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"9",
    //     dropTime:"23",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },{
    //     employeeId:"13",
    //     vehicleType:"car",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"1",
    //     dropTime:"23",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"14",
    //     vehicleType:"bike",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"0",
    //     dropTime:"23",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    //   {
    //     employeeId:"15",
    //     vehicleType:"bike",
    //     vehicleNo:"MH10",
    //     vehicleSeat:"3",
    //     pickUpTime:"0",
    //     dropTime:"23",
    //     pickUpPoint:"Borivali",
    //     dropPoint:"Andheri"
    //   },
    // ];
  }
 
  getData(){
    return this.riderRecord;
  }
}



// @Injectable({
//   providedIn: 'root'
// })

// export class RiderType   {
//   employeeId?:string;
//   vehicleType?:string;
//   vehicleNo?:string;
//   vehicleSeat?:string;
//   pickUpTime?:string;
//   dropTime?:string;
//   pickUpPoint?:string;
//   dropPoint?:string;

// }
