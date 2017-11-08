import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  title = 'app';
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test' },
  { type: 'blueprint', name: 'clientMachine', content: 'Just a client' }];

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content : serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: bluePrintData.serverName,
      content : bluePrintData.serverContent
    });
}
  }
