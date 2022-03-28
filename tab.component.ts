import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { ObservationServiceService } from '../Services/observation-service.service';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

    data: any = [];
    observationData: any = [];
    observationDataALL: any = [];
    observationDataOPEN: any = [];
    observationDatapending: any = [];
    observationDataclosed: any = [];
    empId: any;

    statusforobservation: any;

    constructor(
        private observice: ObservationServiceService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        debugger

        this.empId = localStorage.getItem('employeeId');

        this.observationDataALL = [
            {
                "id": 1,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 2,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 3,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 4,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Open"
            },
            {
                "id": 5,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Open"
            },
            {
                "id": 6,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Closed"
            },
            {
                "id": 7,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Closed"
            },
            {
                "id": 8,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Open"
            },
            {
                "id": 9,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Closed"
            },
            {
                "id": 10,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Open"
            }
        ]

        this.observationDataOPEN = [
            {
                "id": 1,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 2,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 3,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 4,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 5,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 6,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 7,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 8,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 9,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            },
            {
                "id": 10,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "OPEN"
            }
        ]

        this.observationDatapending = [
            {
                "id": 1,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 2,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 3,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 4,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 5,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 6,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 7,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 8,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 9,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            },
            {
                "id": 10,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "Review Pending"
            }
        ]


        this.observationDataclosed = [
            {
                "id": 1,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 2,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 3,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 4,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 5,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 6,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 7,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 8,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 9,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            },
            {
                "id": 10,
                "reportname": "Quarterly Data Analysis",
                "observationheading": "Vendor Invoices Booked and paid twice",
                "primaryprocessowner": "kely.hawkin@mail.com",
                "targetdate": "10 Nov 2021",
                "impact": "High",
                "rating": "High",
                "status": "CLOSED"
            }
        ]

        const routeParams = this.route.snapshot.paramMap;
        var id = Number(routeParams.get('id'));
        console.log(id);
        if (routeParams) {
            debugger
            this.statusforobservation = id;
            this.nevigation(id);
        }
    }

    nevigation(id) {
        debugger
        this.statusforobservation = id;
        if (this.statusforobservation == 0) {
            //this.observationData = this.observationDataALL;

            this.datafetching(this.empId,this.statusforobservation);

        } else if (this.statusforobservation == 1) {
            //this.observationData = this.observationDatapending;

            this.datafetching(this.empId,this.statusforobservation);

        } else if (this.statusforobservation == 2) {
            //this.observationData = this.observationDataOPEN;

            this.datafetching(this.empId,this.statusforobservation);

        } else if (this.statusforobservation == 3) {
            // this.observationData = this.observationDataclosed;
            this.datafetching(this.empId,this.statusforobservation);

        }

        console.log("data:", this.observationData);
    }

    datafetching(empId:any , id :any){
        this.observice
            .getObservationBasedOnStatus(empId,id)
            .subscribe(
                (response: any) => {
                    //this.data = JSON.parse(this.global.decryptObject(response.data));
                    this.observationData = response.data;
                    // console.log(this.data);
                },
                (err: any) => {
                    console.log(err);
                }
            );
    }



}
