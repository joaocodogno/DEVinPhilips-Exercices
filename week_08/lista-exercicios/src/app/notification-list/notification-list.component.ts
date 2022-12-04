import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = [
    {
      id: 1,
      title: 'FACEBOOK',
      subtitle: 'José Ricardo te adicionou no facebook',
      text: 'clique aqui para abrir',
      date: '1h ago',
      read: false,
    },
    {
      id: 2,
      title: 'INSTAGRAM',
      subtitle: 'Aline Maria curtiu sua foto no instagram',
      text: 'clique aqui para abrir',
      date: '3h ago',
      read: false,
    },
    {
      id: 3,
      title: 'BRADESCO',
      subtitle: 'Você recebeu um pix de R$1800,00',
      text: 'clique aqui para abrir',
      date: '1 day ago',
      read: false,
    },
    {
      id: 4,
      title: 'LINKEDIN',
      subtitle: 'Verifique essa oportunidade de emprego',
      text: 'clique aqui para abrir',
      date: '4 days ago',
      read: false,
    }
  ];

  read = 'list-group-item list-group-item-action active" aria-current="true" style="border-radius: 10px;';
  unread = 'opacity-50 list-group-item list-group-item-action active" aria-current="true" style="border-radius: 10px;';

  alteraCor(id: number) {
    const lido = this.notifications.find((notification) => notification.id === id)
    console.log(lido)
    lido?.read === false ? lido.read = true : console.log('oi')
  }
}
