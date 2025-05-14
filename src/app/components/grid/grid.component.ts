import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent, SelectionChangedEvent, GridApi } from 'ag-grid-community';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { RowData, mockData } from '../../models/row-data.model';
import { SelectionPopupComponent } from './selection-popup/selection-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [SelectionPopupComponent, AgGridModule, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  standalone: true
})
export class GridComponent {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  public rowData: RowData[] = [];
  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1
  };
  
  public gridApi: GridApi | null = null;
  public showPopup = false;
  public selectedCount = 0;
  public popupPosition = { x: 0, y: 0 };
  
  ngOnInit() {
    this.rowData = mockData;
    this.setupColumnDefs();
  }
  
  setupColumnDefs() {
    this.columnDefs = [
      {
        headerName: '',
        field: 'checkboxSelection',
        headerCheckboxSelection: true,
        checkboxSelection: true,
        width: 50,
        minWidth: 50,
        maxWidth: 50,
        resizable: false,
        sortable: false,
        filter: false,
        pinned: 'left'
      },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Age', field: 'age', width: 80 },
      { headerName: 'Country', field: 'country' },
      { headerName: 'City', field: 'city' },
      { headerName: 'Salary', field: 'salary', 
        valueFormatter: (params) => {
          return '$' + params.value.toLocaleString();
        }
      }
    ];
  }
  
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }
  
  onSelectionChanged(event: SelectionChangedEvent) {
    const selectedRows = this.gridApi?.getSelectedRows() || [];
    this.selectedCount = selectedRows.length;
    
    if (this.selectedCount > 0) {
      this.calculatePopupPosition();
      this.showPopup = true;
    } else {
      this.showPopup = false;
    }
  }
  
  calculatePopupPosition() {
    // Get the first column's width to position the popup after it
    if (this.gridApi) {
      const columnWidth = this.gridApi.getColumnDef('checkboxSelection')?.width || 50;
      
      // We position the popup to the right of the checkbox column
      this.popupPosition = {
        x: columnWidth + 8, // 8px offset for spacing
        y: 56 // Position below the header row
      };
    }
  }
  
  clearSelection() {
    this.gridApi?.deselectAll();
    this.showPopup = false;
  }

}
