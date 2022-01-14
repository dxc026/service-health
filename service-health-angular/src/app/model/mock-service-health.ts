import { ServiceHealth } from "./service-health";

export const ServiceHealthList: ServiceHealth[] = [
  {name: 'Sourcing', status: 'Active',
  endpoints: [{name: '/catalog/getItemsByPNOrSku', status: 'Active'},
  {name: '/catalog/getItems', status: 'Active'}
  ]},
  {name: 'Appointment', status: 'Inactive',
  endpoints: [{name: '/appointment', status: 'Active'},
  {name: '/selfService/o/tracker/', status: 'Active'},
  {name: '/selfService/o/coupons', status: 'Inactive'}
  ]},

]
