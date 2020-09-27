# PSassignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Description
This Fornt-End application was developed to help the users to fetch the lists and browse all launches by spacex program.

## Functionalities
* User is able to filter the data with the help of provided filters.
* Applied change the filter and uodate the page with all the latest records without reloding/refreshing the page.
* Responsive UI easy to view in any device.
* SpaceX API used to fetch the records.

## How it works
It uses the SpaceX API in the backend to fetch the records and using that the view gets updated. Application also has the capability to append the multiple filter criteria while filtering the records.
It has the Service directory which contains the service file of anguler in whic all HTTP request has been written down.
MasterMethod -
``` 
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
  ```
  
  It manages all the Fileter query.
  
  ## Making request to Backend API
  * Method used to fetch default record's at the time of page load.
  ```
  getSpacexInfo(){
  .
  .
  }
  ```
  
  * Method used to fetch the filtered data
  ```
  getfilterdata(params){
  .
  .
  }
  ```
  Above method can be found in app/service/external.service.ts .
  


