
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const batteryLevel = [
    { id: 1, label: "Avaliable", value: 60, color: "secondary", icon: faDesktop },
    { id: 2, label: "Used", value: 40, color: "tertiary", icon: faTabletAlt }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    batteryLevel as trafficShares,
    totalOrders
};