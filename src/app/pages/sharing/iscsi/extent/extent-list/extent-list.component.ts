import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {GlobalState} from '../../../../../global.state';
import {RestService, WebSocketService} from '../../../../../services/';

@Component({
  selector : 'app-iscsi-extent-list',
  template : `
    <entity-table [conf]="this"></entity-table>
  `
})
export class ExtentListComponent {

  protected resource_name: string = 'services/iscsi/extent';
  protected route_add: string[] = [ 'sharing', 'iscsi', 'extent', 'add' ];
  protected route_delete: string[] = [ 'sharing', 'iscsi', 'extent', 'delete' ];
  protected route_edit: string[] = [ 'sharing', 'iscsi', 'extent', 'edit' ];

  constructor(protected router: Router, protected rest: RestService, protected ws: WebSocketService) {}

  public columns: Array<any> = [
    {
      name : 'Extent Name',
      prop : 'iscsi_target_extent_name',
    },
    {
      name : 'Serial',
      prop : 'iscsi_target_extent_serial',
    },
  ];
  public config: any = {
    paging : true,
    sorting : {columns : this.columns},
  };

  afterInit(entityList: any) {}
}