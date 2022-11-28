import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = [
    {
      title: 'FACEBOOK',
      subtitle: 'José Ricardo te adicionou no facebook',
      text: 'clique aqui para abrir',
      date: '1h ago',
      read: false,
    },
    {
      title: 'INSTAGRAM',
      subtitle: 'Aline Maria curtiu sua foto no instagram',
      text: 'clique aqui para abrir',
      date: '3h ago',
      read: false,
    },
    {
      title: 'BRADESCO',
      subtitle: 'Você recebeu um pix de R$1800,00',
      text: 'clique aqui para abrir',
      date: '1 day ago',
      read: false,
    },
    {
      title: 'LINKEDIN',
      subtitle: 'Verifique essa oportunidade de emprego',
      text: 'clique aqui para abrir',
      date: '4 days ago',
      read: false,
    }
  ]

}
