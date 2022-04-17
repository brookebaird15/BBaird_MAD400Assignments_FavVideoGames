import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private _snackBar: MatSnackBar) { 
    this.updates.versionUpdates.subscribe(event => {
      switch(event.type){
        case 'VERSION_DETECTED':
          _snackBar.open(`A new version of app is ready: ${event.version.hash}`, 'OK');
          break;
        case 'VERSION_READY':
          _snackBar.open(`New app version ready for use: ${event.latestVersion.hash}`, 'Update');
          this.updates.activateUpdate().then(() => document.location.reload());
          break;
        
      }
    })
  }
}
