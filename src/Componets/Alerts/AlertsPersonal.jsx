import React from 'react'
import { NotificationManager } from 'react-notifications';

function AlertsPersonal(type, message) {
       console.log('type',type)
       console.log('message',message)
          switch (type) {
            case 'info':
                console.log('entre en info')
              NotificationManager.info({message})
              return(
                <button className='btn btn-info'
                onClick={this.createNotification('info')}>Info
                </button>
              )
              
            case 'success':
              NotificationManager.success({message});
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
       
 
}

export default AlertsPersonal