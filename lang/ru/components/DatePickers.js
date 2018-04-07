export default {
  header: 'Выбор даты/месяца',
  headerText: '`v-date-picker` является автономным компонентом, который может использоваться во многих существующих компонентах Vuetify. Он предлагает пользователю визуальное представление для выбора даты/месяца.',
  components: ['v-date-picker'],
  examples: [{
    dateLight: {
      header: 'Выбор даты',
      desc: 'Выбор даты существует в двух вариантах, портретная **(по умолчанию)** и альбомная. По умолчанию они вызывают событие `input` при выборе дня (для выбора даты) или месяца (для выбора месяца), но с **реактивным** свойством они могут обновить модель даже после клика года/месяца.'
    },
    dateColorable: {
      header: 'Выбор даты - Цвета',
      desc: 'Цвета выбора даты можно установить с помощью свойств `color` и `header-color`. Если `header-color` не указан, заголовок будет использовать значение `color` .'
    },
    dateDialogAndMenu: {
      header: 'Выбор даты - В диалоговом окне и меню',
      desc: 'При интеграции "выбора" в поле `v-text` рекомендуется использовать **readonly**. Это предотвратит запуск мобильных клавиатур. Чтобы сохранить вертикальную ориентацию, вы также можете скрыть заголовок выбора. \n \n Выбор даты выставляет доступный слот, который позволяет вам подключаться к функциям сохранения и отмены. Оно поддерживать старое значение, которое может быть заменено, если пользователь отменяет событие.'
    },
    dateAllowedDates: {
      header: 'Выбор даты - Допустимые значения',
      desc: 'Вы можете указать допустимые даты с использованием массивов, объектов и функций.'
    },
    dateWidth: {
      header: 'Выбор даты - установка ширины',
      desc: 'Вы можете указать допустимую ширину или сделать ее на всю ширину.'
    },
    dateBirthday: {
      header: 'Выбор даты - день рождения',
      desc: 'Начиная с выбора года по умолчанию, ограничивая диапазон дат и закрывая меню выбора после выбора дня, сделайте идеальный выбор день рождения.'
    },
    datePickerDate: {
      header: 'Выбор даты - реакция на изменение месяца/года',
      desc: 'Вы можете наблюдать за `pickerDate`, который является отображаемым месяцем/годом (в зависимости от типа выбора и активного вида), чтобы выполнять некоторые действия, когда он изменяется.'
    },
    dateEvents: {
      header: 'Выбор даты - События',
      desc: 'Вы можете указать события, используя массивы, объекты и функции. Чтобы изменить цвет по умолчанию для события, используйте **event-color** prop.'
    },
    dateInternationalization: {
      header: 'Выбор даты - интернационализация',
      desc: 'Выбор даты поддерживает интернационализацию через объект JavaScript Date. Укажите тег языка BCP 47, используя `locale`, а затем установите первый день недели с помощью `first-day-of-week` .'
    },
    dateIcons: {
      header: 'Выбор даты - иконки',
      desc: 'Вы можете переопределить иконки по умолчанию, используемые в сборщике.'
    },
    dateReadonly: {
      header: 'Выбор даты - только для чтения',
      desc: 'Выбор новой даты может быть отключен путем добавления **readonly** prop.'
    },
    dateCurrent: {
      header: 'Выбор даты - текущий индикатор даты',
      desc: 'По умолчанию текущая дата отображается с помощью контурной кнопки - **show-current** prop позволяет удалить границу или выбрать другую дату, которая будет отображаться как текущая.'
    },
    monthLight: {
      header: 'Выбор месяца',
      desc: 'Выбор месяца имеет два варианта ориентации: портретная **(по умолчанию)** и альбомная.'
    },
    monthColorable: {
      header: 'Выбор месяца - цвета',
      desc: 'Цвета Выбора месяца можно установить с помощью `color` и `header-color` props. Если `header-color` prop не указан, заголовок будет использовать значение `color`.'
    },
    monthDialogAndMenu: {
      header: 'Выбор месяца - В диалоговом окне и меню',
      desc: 'При интеграции выбора `v-text-field` рекомендуется использовать **readonly** prop. Это предотвратит запуск мобильных клавиатур. Чтобы сохранить вертикальную ориентацию, вы также можете скрыть заголовок выбора. \n \n Сборщики выставляют доступный слот, который позволяет вам подключаться к функциям сохранения и отмены. Это будет поддерживать старое значение, которое может быть заменено, если пользователь отменяет.'
    },
    monthAllowedMonths: {
      header: 'Выбор месяца - допустимые значения',
      desc: 'Вы можете указать допустимые месяцы, используя массивы, объекты и функции.'
    },
    monthWidth: {
      header: 'Выбор месяца - установка ширины',
      desc: 'Вы можете указать допустимую ширину или сделать ее на всю ширину.'
    },
    monthInternationalization: {
      header: 'Выбор месяца - интернационализация',
      desc: 'Выбор даты поддерживает интернационализацию через объект JavaScript Date. Укажите тег языка BCP 47, используя `locale`, а затем установите первый день недели с помощью `first-day-of-week` .'
    },
    monthIcons: {
      header: 'Выбор месяца - иконки',
      desc: 'Вы можете переопределить значки по умолчанию.'
    },
    monthReadonly: {
      header: 'Выбор месяца - только для чтения',
      desc: 'Выбор новой даты можно отключить, добавив **readonly** prop.'
    },
    monthCurrent: {
      header: 'Выбор месяца - текущий индикатор месяца',
      desc: 'По умолчанию текущий месяц отображается с помощью кнопки-контура - **show-current** prop позволяет удалить границу или выбрать другой месяц, который будет отображаться как текущий.'
    }
  }],
  props: {
    'v-date-picker': {
      type: 'Определяет тип выбора- `date` для выбора даты, `month` для выбора месяца',
      monthFormat: 'Функция форматирования, используемая для отображения месяцев в таблице месяцев. Вызывается с датой (строка ISO 8601) и locale (string).',
      allowedDates: 'Ограничения, которые могут быть выбраны',
      eventColor: 'Устанавливает цвет для точки события. Это может быть строка (все события будут иметь один и тот же цвет) или `объект`, где атрибутом является дата события, а значение - цвет указанной даты или `функция`, принимающий дату в качестве параметра и возвращающий цвет для этой даты',
      events: 'Отмечает дату как событие (только для выбора даты)',
      locale: 'Устанавливает языковой стандарт. Принимает строку с тегом языка BCP 47.',
      firstDayOfWeek: 'Устанавливает первый день недели, начиная с 0 для воскресенья.',
      titleDateFormat: 'Позволяет настроить формат строки даты, который отображается в заголовке выбора даты. Вызывается с датой (строка ISO 8601) и locale (string).',
      headerDateFormat: 'Позволяет настроить формат строки месяца, который отображается в заголовке календаря. Вызывается с датой (строка ISO 8601) и locale (string).',
      yearFormat: 'Позволяет настроить формат строки года, отображаемой в заголовке календаря. Вызывается с датой (строка ISO 8601) и locale (string).',
      dayFormat: 'Позволяет настроить формат дневной строки, отображаемой в таблице даты. Вызывается с датой (строка ISO 8601) и locale (string).',
      yearIcon: 'Создает иконку рядом с годом',
      min: 'Минимальный допустимый день/месяц',
      max: 'Максимальный допустимый день/месяц',
      pickerDate: 'Отображается год/месяц',
      nextIcon: 'Устанавливает иконку для кнопки следующего месяца/года',
      prevIcon: 'Устанавливает иконку для кнопки предыдущий месяц/год',
      readonly: 'Делает сборщик readonly (не позволяет выбрать новую дату или перемещаться по месяцам/годам)',
      scrollable: 'Позволяет изменять отображаемый месяц с помощью мыши',
      showCurrent: 'Переключает видимость текущей даты/месяца или показывает предоставленную дату/месяц как текущий'
    }
  }
}