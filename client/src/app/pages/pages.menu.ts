export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'Tests',
        data: {
          menu: {
            title: 'Tests',
            icon: 'ion-android-home',
            selected: true,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'Ressources',
        data: {
          menu: {
            title: 'Ressources',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },   {
      path: 'Methodes',
  data: {
  menu: {
    title: 'Méthodes',
      icon: 'ion-android-home',
      selected: false,
      expanded: false,
      order: 0
  }
}
}, {
        path: 'Results',
        data: {
          menu: {
            title: 'Résultats',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }, {
        path: 'Logs',
        data: {
          menu: {
            title: 'Historiques',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
    ]
  }
];
