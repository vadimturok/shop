import React, {useContext, useEffect, useState} from 'react'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import DeviceItem from './DeviceItem';
import {Row} from 'react-bootstrap'
import '../styles/style.css'
import { getAllOrderDevices } from '../http/orderAPI';

export const DeviceList = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex items-row">
            {device.devices.map(device =>
                <DeviceItem  className="device__item" dev={device} key={device.id}></DeviceItem>
            )}
        </Row>
    )
})
export default DeviceList
