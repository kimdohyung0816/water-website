const tasteQuestions = [
    {
      id: 't1',
      text: { ko: '어떤 목넘김을 선호하시나요?', en: 'What mouthfeel do you prefer?' },
      options: [
        { value: 'still',      type: 'tap',       label: { ko: '부드럽고 무가/잔잔함',  en: 'Smooth & still' } },
        { value: 'light-fizz', type: 'sparkling', label: { ko: '살짝 탄산감',         en: 'Lightly crisp' } },
        { value: 'full-fizz',  type: 'sparkling', label: { ko: '강한 탄산감',         en: 'Full fizz' } },
        { value: 'no-pref',    type: 'tap',       label: { ko: '무관',                en: 'No preference' } },
      ]
    },
    {
      id: 't2',
      text: { ko: '얼마나 강한 맛을 원하시나요?', en: 'How much flavor do you enjoy?' },
      options: [
        { value: 'none',       type: 'tap',       label: { ko: '전혀 없음',          en: 'None – pure water' } },
        { value: 'subtle',     type: 'mineral',   label: { ko: '미세한 미네랄 맛',    en: 'Very subtle minerals' } },
        { value: 'light-flavor',type: 'flavored', label: { ko: '과일·허브향 약간',     en: 'A bit of fruit/herb' } },
        { value: 'bold',       type: 'flavored',  label: { ko: '강한 풍미',           en: 'Bold flavored water' } },
      ]
    },
    {
      id: 't3',
      text: { ko: '지금 가장 끌리는 음료는?', en: 'Which beverage appeals most right now?' },
      options: [
        { value: 'plain',      type: 'tap',       label: { ko: '그냥 물',          en: 'A simple glass of water' } },
        { value: 'sparkling',  type: 'sparkling', label: { ko: '탄산수',           en: 'Sparkling water' } },
        { value: 'lemon',      type: 'flavored',  label: { ko: '레몬 워터',        en: 'Water with lemon' } },
        { value: 'sweet',      type: 'flavored',  label: { ko: '스포츠 음료/달콤음료',en: 'Sports or sweet drink' } },
      ]
    },
    {
      id: 't4',
      text: { ko: '물에 하나만 추가할 수 있다면?', en: 'If you could add one thing to water…' },
      options: [
        { value: 'ice',        type: 'tap',       label: { ko: '얼음만',            en: 'Just ice (cold)' } },
        { value: 'fruit',      type: 'flavored',  label: { ko: '과일/허브',        en: 'Fruit or herb slice' } },
        { value: 'carbonation',type: 'sparkling', label: { ko: '탄산',             en: 'Bubbles!' } },
        { value: 'syrup',      type: 'flavored',  label: { ko: '시럽 믹스',         en: 'Splash of syrup' } },
      ]
    },
    {
      id: 't5',
      text: { ko: '식당에서 주로 무엇을 주문하시나요?', en: 'What do you usually ask for at restaurants?' },
      options: [
        { value: 'plain',      type: 'tap',       label: { ko: '그냥 물',         en: 'Just plain water' } },
        { value: 'sparkling',  type: 'sparkling', label: { ko: '탄산수',           en: 'Do you have sparkling?' } },
        { value: 'lemon',      type: 'flavored',  label: { ko: '레몬 추가',       en: 'Water with lemon' } },
        { value: 'other',      type: 'flavored',  label: { ko: '다른 음료',       en: 'I order something else' } },
      ]
    },
    {
      id: 't6',
      text: { ko: '탄산 있는 물에 대해 어떻게 느끼시나요?', en: 'How do you feel about carbonation?' },
      options: [
        { value: 'love',       type: 'sparkling', label: { ko: '완전 좋아함',     en: 'Love it' } },
        { value: 'sometimes',  type: 'sparkling', label: { ko: '가끔 즐김',      en: 'Enjoy occasionally' } },
        { value: 'prefer-still',type: 'tap',      label: { ko: '무탄산 선호',     en: 'Prefer still' } },
        { value: 'avoid',      type: 'tap',       label: { ko: '회피함',          en: 'Avoid carbonation' } },
      ]
    },
    {
      id: 't7',
      text: { ko: '어떤 패키지가 눈에 띄나요?', en: 'What packaging catches your eye?' },
      options: [
        { value: 'clear-bottle',type: 'tap',       label: { ko: '투명병에 깔끔한 디자인', en: 'Sleek clear bottle' } },
        { value: 'can',        type: 'sparkling', label: { ko: '캔/탄산수 용기',   en: 'Fun can/bottle' } },
        { value: 'colorful',   type: 'flavored',  label: { ko: '컬러풀 가향병',   en: 'Colorful flavored water' } },
        { value: 'dont-care',  type: 'tap',       label: { ko: '상관없음',        en: 'Don’t care' } },
      ]
    },
    {
      id: 't8',
      text: { ko: '갈증 해소 순간, 어떤 장면이 떠오르나요?', en: 'Imagine quenching your thirst…' },
      options: [
        { value: 'cold-still', type: 'tap',       label: { ko: '차갑고 맑은 물 한 모금',          en: 'Ice-cold pure water' } },
        { value: 'sparkle-lime',type: 'sparkling',label: { ko: '라임 탄산수 한 모금',             en: 'Chilled sparkling water with lime' } },
        { value: 'mountain-spring',type: 'mineral',label: { ko: '산속 샘물처럼 깨끗한 물',         en: 'Mountain spring water' } },
        { value: 'fruity-drink',type: 'flavored', label: { ko: '과즙 가득 가향수',               en: 'Fruity flavored water' } },
      ]
    }
  ];
  
  export default tasteQuestions;
  