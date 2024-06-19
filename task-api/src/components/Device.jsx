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
    device_id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    device_type: { value: null, matchMode: FilterMatchMode.CONTAINS },
    received_datetime: { value: null, matchMode: FilterMatchMode.CONTAINS },
    cumulative_flow: { value: null, matchMode: FilterMatchMode.CONTAINS },
    serial_number: { value: null, matchMode: FilterMatchMode.CONTAINS },
    activity: { value: null, matchMode: FilterMatchMode.CONTAINS },
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

  const statusItemTemplate = (option) => {
      return <Tag value={option} severity={getSeverity(option)} />;
  };

  const statusRowFilterTemplate = (options) => {
    return (
        <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
    );
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
    <div className={`${sidebarToggle ? 'ml-80' : ''} w-full transition-all duration-300 my-16`}>
      <div className='card'>
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
        </div>
        <DataTable
          value={data}
          header={header}
          paginator
          stripedRows
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sortMode="multiple"
          selectionMode="multiple"
          showGridlines 
          selection={selectedDevices}
          onSelectionChange={(e) => setSelectedDevices(e.value)}
          filters={filters}
          globalFilter={globalFilterValue}
          globalFilterFields={['device_id', 'status', 'cumulative_flow', 'received_datetime', 'serial_number', 'device_type']}
          emptyMessage="No devices found."
          className="p-datatable-sm"
          size='small'
          removableSort
          filterDisplay='row'
          tableStyle={{ minWidth: '60rem'} }
        >
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
          <Column field="device_id" header="Төхөөрөмжийн ID" sortable filter filterPlaceholder="Search by ID"></Column>
          <Column field="status" header="Төлөв" sortable filter body={statusBodyTemplate} filterElement={statusRowFilterTemplate} filterMenuStyle={{ width: '14rem' }}  style={{ minWidth: '12rem' }} ></Column>
          <Column field="cumulative_flow" header="Заалт" sortable filter filterPlaceholder="Search by flow"></Column>
          <Column field="received_datetime" header="Хугацаа" sortable filter filterPlaceholder="Search by date"></Column>
          <Column field="serial_number" header="Сериалийн дугаар" sortable filter filterPlaceholder="Search by serial"></Column>
          <Column field="device_type" header="Төхөөрөмжийн төрөл" sortable filter filterPlaceholder="Search by type"></Column>
        </DataTable>
      </div>
    </div>
    
  )
}

export default Device