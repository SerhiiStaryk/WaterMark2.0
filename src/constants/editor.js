export const CUSTOM_TEMPLETE = {
  blocks: [
    {
      id: "1",
      type: "paragraph",
      data: {
        text: "Копія з фрагмента ..."
      }
    },
    {
      id: "2",
      type: "paragraph",
      data: {
        text: "за адресою: ..."
      }
    },
    {
      id: "2",
      type: "paragraph",
      data: {
        text: "<b>для інформації</b>"
      }
    },
    {
      id: "3",
      type: "paragraph",
      data: {
        text: "Головний спеціаліст відділу інженерних споруд, транспорту та геослужби"
      }
    },
  ]
}

export const _500_TEMPLETE = {
  blocks: [
    {
      id: "1",
      type: "paragraph",
      data: {
        text: "Шаблон 500 не налаштований"
      }
    }
  ]
}

export const _2000_TEMPLETE = {
  blocks: [
    {
      id: "1",
      type: "paragraph",
      data: {
        text: "Шаблон 2000 не налаштований"
      }
    }
  ]
}

export const TEMPLETE_OPTIONS = [
  { label: 'Custom', value: CUSTOM_TEMPLETE },
  { label: '500', value: _500_TEMPLETE },
  { label: '2000', value: _2000_TEMPLETE },
]