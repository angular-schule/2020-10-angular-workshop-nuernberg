import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Subject } from 'rxjs';
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  subject = webSocket('ws://localhost:8081/mytestws');

  messages = new Subject<Action>();

  connect() {
    this.subject.subscribe(data => {
      console.log('Message: ', data),
      this.messages.next(data as Action)
    });

    // const payload = JSON.stringify({
    //   name: 'blubb',
    //   password: '111'
    // })

    // this.subject.next({
    //   service: 'logon',
    //   payload
    // });

/* {"service":"ntfs",
"payload":"{\"id\":\"1212-1212-121212-1212\",\
"sequence\":\"0\",\
"command\":\"getFiles\",\
"commandparams\":{\
   "Path\":\"F:\\\\my-webframework\\\\AppSample\\\\NTFSWebRoot\",\
   "Searchpattern\":\"*\",\
   "Sort\":\"name\"}}"}
*/

  // const payload = JSON.stringify({
  //   id: '',
  //   sequence: '',
  //   command: 'getFiles',
  //   commandparams: {
  //     path: 'F:/my-webframework/AppSample/NTFSWebRoot',
  //     searchPattern: '*',
  //     sort: 'name'
  //   }
  // })

  // this.subject.next({
  //       service: 'ntfs',
  //       payload
  //     });

    // subject.complete(); // Closes the connection.
  }

  sendMessage(message: object) {
    this.subject.next(message);
  }
}

