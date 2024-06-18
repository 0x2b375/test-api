/* eslint-disable default-case */
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './style.css'
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


        

const Device = ({sidebarToggle, setSidebarToggle}) => {
  const [data, setData] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    device_id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    device_type: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    received_datetime: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    cumulative_flow: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    serial_number: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
});
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [statuses] = useState(['open', 'close'])
  const getSeverity = (status) => {
    switch (status) {
        case 'close':
            return 'danger';

        case 'open':
            return 'success';
    }
  };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const footer = `Нийт ${data ? data.length : 0}-н төхөөрөмж байна.`;
  const renderHeader = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-content-between align-items-center mt-6">
            <h4 className="mr-10 text-3xl">Төхөөрөмж</h4>
            <h4>{footer}</h4>
            <IconField iconPosition="right">
                <InputIcon className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search" className='text-sm' />
            </IconField>
        </div>
    );
  };
  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
  };

  const statusFilterTemplate = (options) => {
      return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
  };

  const statusItemTemplate = (option) => {
      return <Tag value={option} severity={getSeverity(option)} />;
  };
  const header = renderHeader();
  useEffect(() => {
    axios.post('http://localhost:3001/api/devices')
      .then(response => {
        setData(response.data.body);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

 
  return (
    <div className={`${sidebarToggle ? 'ml-60' : ''} w-full transition-all duration-300 mt-16`}>
      <div className='card'>
        <DataTable
          value={data}
          header={header}
          footer={footer}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sortMode="multiple"
          selectionMode="multiple"
          selection={selectedDevices}
          onSelectionChange={(e) => setSelectedDevices(e.value)}
          filters={filters}
          globalFilter={globalFilterValue}
          emptyMessage="No devices found."
          className="p-datatable-sm"
          size='small'
          tableStyle={{ minWidth: '60rem'} }
        >
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
          <Column field="device_id" header="Device ID" sortable filter></Column>
          <Column field="status" header="Status" sortable filter body={statusBodyTemplate} filterElement={statusFilterTemplate}></Column>
          <Column field="cumulative_flow" header="Cumulative Flow" sortable filter></Column>
          <Column field="received_datetime" header="Received Date" sortable filter></Column>
          <Column field="serial_number" header="Serial Number" sortable filter></Column>
          <Column field="device_type" header="Device Type" sortable filter></Column>
        </DataTable>
      </div>
    </div>
    
  )
}

export default Device