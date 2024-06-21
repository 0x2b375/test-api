/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { utils, writeFile } from 'xlsx';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Device = () => {
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
        device_dn: { value: null, matchMode: FilterMatchMode.CONTAINS },
        device_user_id: { value: null, matchMode: FilterMatchMode.CONTAINS },
        combined_geolocation: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [statuses] = useState(['open', 'close']);

    const getSeverity = (status) => {
        switch (status) {
            case 'close':
                return { severity: 'danger', text: 'хаалттай' };
            case 'open':
                return { severity: 'success', text: 'нээлттэй' };
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

    const exportToExcel = () => {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Devices");
        writeFile(workbook, "Devices.xlsx");
    };

    const showConfirmDialog = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-alert'>
                        <p className='p-2'>Excel-рүү хувиргахдаа итгэлтэй байна уу?</p>
                        <div className='react-confirm-alert-button-group'>
                            <button
                                onClick={() => {
                                    exportToExcel();
                                    onClose();
                                }}
                            >
                                Тийм
                            </button>
                            <button onClick={onClose}>Үгүй</button>
                        </div>
                    </div>
                );
            },
            closeOnEscape: true,
            closeOnClickOutside: true,
        });
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-5 justify-content-between align-items-center text-white">
                <h4 className="mr-10 text-2xl">Төхөөрөмж</h4>
                <h4>{footer}</h4>
                <button onClick={showConfirmDialog} className="px-4 py-2 text-white hover:bg-white hover:text-gray-900 rounded-lg focus:bg-white focus:text-gray-900">
                    Excel-рүү хөрвүүлэх
                </button>
                <IconField iconPosition="right">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Хайх..." className='text-sm p-2 border rounded-lg border-gray-300 text-gray-800' />
                </IconField>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        const { severity, text } = getSeverity(rowData.status);
        return <Tag value={text} severity={severity} />;
    };

    const statusItemTemplate = (option) => {
        const { severity, text } = getSeverity(option);
        return <Tag value={text} severity={severity} />;
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select" className="p-column-filter" showClear style={{ minWidth: '0rem'}} />
        );
    };

    const geolocationBodyTemplate = (rowData) => {
        const latitude = rowData.device_user_geolocation_latitude;
        const longitude = rowData.device_user_geolocation_longitude;
        
        if (latitude && longitude) {
            return `${latitude} ${longitude}`;
        }
        return '';
    };

    const transformData = (data) => {
        return data.map(item => ({
            ...item,
            combined_geolocation: `${item.device_user_geolocation_latitude || ''} ${item.device_user_geolocation_longitude || ''}`
        }));
    };

    const header = renderHeader();

    useEffect(() => {
        axios.post('http://localhost:3001/api/devices')
            .then(response => {
                setData(transformData(response.data.body));
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    return (
        <main className='flex flex-col p-6 md:p-12 my-6 md:my-12'>
            <div className='responsive-table-container overflow-x-auto'>
                <div className='card'>
                    <div className="flex mb-4 gap-2"></div>
                    <DataTable
                        value={data}
                        header={header}
                        paginator
                        stripedRows
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        sortMode="multiple"
                        selectionMode="multiple"
                        selection={selectedDevices}
                        onSelectionChange={(e) => setSelectedDevices(e.value)}
                        filters={filters}
                        globalFilter={globalFilterValue}
                        globalFilterFields={['device_id', 'status', 'cumulative_flow', 'received_datetime', 'serial_number', 'device_type', 'device_dn', 'device_user_id', 'combined_geolocation']}
                        emptyMessage="No devices found."
                        className="p-datatable-sm table-gridlines"
                        size='small'
                        scrollable
                        scrollHeight="600px"
                        removableSort
                        filterDisplay='row'
                        tableStyle={{ minWidth: '80rem' }}
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '2rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column field="device_id" header="Төхөөрөмжийн ID" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="serial_number" header="Сериалийн дугаар" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="status" header="Төлөв" sortable filter body={statusBodyTemplate} filterElement={statusRowFilterTemplate} filterMenuStyle={{ width: '10rem' }} style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="device_type" header="Төхөөрөмжийн төрөл" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="cumulative_flow" header="Заалт" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="device_user_id" header="Хэрэглэгчийн ID" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="combined_geolocation" body={geolocationBodyTemplate} header="Хаяг" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="device_dn" header="Төхөөрөмжийн диаметр" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                        <Column field="received_datetime" header="Хугацаа" sortable filter filterPlaceholder="Search.." style={{ width: '10rem', textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        </main>
    );
};

export default Device;
