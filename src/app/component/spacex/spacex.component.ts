import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../../service/external.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpacexComponent implements OnInit {

  constructor(private externalService: ExternalService) { }
  spacexData: any;
  launchYear = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  successfulLaunch = ["true", "false"];
  successfulLanding = ["true", "false"];


  selectedLaunchYear: any;
  selectedLanding: any;
  selectedLaunch: any;

  ngOnInit(): void {

    this.fetchSapcexInformation();
  }

  fetchSapcexInformation() {
    this.externalService.getSpacexInfo().subscribe(records => {
      this.spacexData = records;
    })
  }


  

  getlaunchyear(year) {

    this.selectedLaunchYear = year;

    

    this.mastermethod()

  }

  getLaunchSuccessfilter(params) {
    this.selectedLaunch = params;
    this.mastermethod()
  }


  getLandsuccess(param) {
    this.selectedLanding = param;
    this.mastermethod()
  }


  mastermethod() {
    var whereclause = "";
    if (this.selectedLaunchYear != undefined) {

      whereclause = "&launch_year=" + this.selectedLaunchYear;
    }
    if (this.selectedLaunch != undefined) {

      whereclause += "&launch_success=" + this.selectedLaunch;
    }
    if (this.selectedLanding != undefined) {

      whereclause += "&land_success=" + this.selectedLanding;
    }

    this.externalService.getfilterdata(whereclause).subscribe(records => {
      this.spacexData = records
    })


  }






}
