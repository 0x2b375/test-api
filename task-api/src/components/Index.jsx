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
import Footer from './include/footer'
import Header from './include/header';

        

const Index = () => {
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
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search" />
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
    <div>
      <div className='card'>
      <DataTable value={data} showGridlines header={header} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} removableSort  sortMode="multiple" tableStyle={{ minWidth: '80rem' } } dataKey="id" selectionMode="checkbox" selection={selectedDevices} onSelectionChange={(e) => setSelectedDevices(e.value)} filters={filters} filterDisplay="menu" globalFilterFields={['device_id', 'status', 'cumulative_flow', 'received_datetime"', 'serial_number', 'device_type']} emptyMessage="No devices found." ca>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field="device_id" header="Төхөөрөмжийн ID" sortable style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by id"/>
        <Column field="status" header="Төлөв" sortable style={{ minWidth: '12rem' }} filter filterMenuStyle={{ width: '14rem' }} body={statusBodyTemplate} filterElement={statusFilterTemplate} />
        <Column field="cumulative_flow" header="Заалт" sortable dataType="numeric" style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by flow"/>
        <Column field="received_datetime" header="Хугацаа" sortable style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by date"/>
        <Column field="serial_number" header="Сериалийн дугаар" sortable style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by serial"/>
        <Column field="device_type" header="Төхөөрөмжийн төрөл" sortable style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by type"/>
      </DataTable>
    </div>
    </div>
    
  )
}

export default Index