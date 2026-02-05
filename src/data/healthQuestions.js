const healthQuestions = [
    {
      id: 'h1',
      text: { 
        ko: '물 마시는 주된 목적은 무엇인가요?', 
        en: 'What is your main goal for drinking water?' 
      },
      options: [
        { value: 'hydration', type: 'purified', label: { ko: '최대 수분 공급 및 에너지 유지', en: 'Stay optimally hydrated and energized' } },
        { value: 'minerals',   type: 'mineral',  label: { ko: '미네랄·영양소 보충',     en: 'Gain essential minerals and nutrients' } },
        { value: 'purity',     type: 'purified', label: { ko: '불순물 제거·해독',       en: 'Detoxify and avoid impurities' } },
        { value: 'pH',         type: 'alkaline', label: { ko: '체내 산도 균형(pH)',      en: 'Balance my body’s pH levels' } },
      ]
    },
    {
      id: 'h2',
      text: { ko: '원천(소스)은 자연 광천수를 원하시나요?', en: 'Do you prefer natural source waters?' },
      options: [
        { value: 'natural',    type: 'mineral',  label: { ko: '천연 광천수·약수', en: 'Natural spring or mineral water' } },
        { value: 'purified',   type: 'purified', label: { ko: '철저 정제수',      en: 'Purified water (RO, 필터)' } },
        { value: 'neutral',    type: 'tap',       label: { ko: '무관·수돗물도 OK', en: 'No strong preference' } },
        { value: 'enhanced',   type: 'alkaline',  label: { ko: '기능성 강화 워터', en: 'Enhanced (electrolyte/alkaline)' } },
      ]
    },
    {
      id: 'h3',
      text: { ko: '물 속 미네랄 함량은 어느 정도를 원하시나요?', en: 'How do you feel about minerals in your water?' },
      options: [
        { value: 'high',       type: 'mineral',  label: { ko: '최대한 많이',   en: 'As many natural minerals as possible' } },
        { value: 'moderate',   type: 'mineral',  label: { ko: '적당량',       en: 'Moderate mineral content' } },
        { value: 'electrolyte',type: 'alkaline', label: { ko: '전해질 첨가',   en: 'Added electrolytes (sports/alkaline)' } },
        { value: 'low',        type: 'purified', label: { ko: '거의 없음',     en: 'Minimal minerals (soft/distilled)' } },
      ]
    },
    {
      id: 'h4',
      text: { ko: 'pH 수치가 중요하신가요?', en: 'Is the pH level of your water important?' },
      options: [
        { value: 'alkaline',   type: 'alkaline', label: { ko: '알칼리수(pH>7)', en: 'Yes – prefer alkaline (pH>7)' } },
        { value: 'neutral',    type: 'tap',      label: { ko: '중성(pH7)',     en: 'Neutral pH (~7)' } },
        { value: 'no',         type: 'tap',      label: { ko: '상관없음',      en: 'Not concerned' } },
        { value: 'acidic',     type: 'sparkling',label: { ko: '산성(탄산수 등)',en: 'I like slightly acidic (sparkling)' } },
      ]
    },
    {
      id: 'h5',
      text: { ko: '식이·건강상 필요가 있으신가요?', en: 'Do you have specific dietary/health needs?' },
      options: [
        { value: 'electrolyte',type: 'alkaline',  label: { ko: '운동 후 전해질 보충',     en: 'Replenish electrolytes (sports)' } },
        { value: 'low-sodium', type: 'purified',  label: { ko: '저나트륨 식단',           en: 'Low sodium' } },
        { value: 'cal-mag',    type: 'mineral',   label: { ko: '칼슘·마그네슘 보충',     en: 'Calcium/Magnesium boost' } },
        { value: 'none',       type: 'tap',       label: { ko: '없음',                   en: 'No special needs' } },
      ]
    },
    {
      id: 'h6',
      text: { ko: '맛보다 순도(깨끗함)를 더 중시하시나요?', en: 'Do you prioritize taste or purity?' },
      options: [
        { value: 'health',     type: 'mineral',   label: { ko: '건강이 우선(미네랄 맛 OK)', en: 'Health first (mineral taste OK)' } },
        { value: 'purity',     type: 'purified',  label: { ko: '깨끗한 물맛 선호',         en: 'Prefer a clean taste' } },
        { value: 'balanced',   type: 'mineral',   label: { ko: '적당히 미네랄 맛',         en: 'Moderate mineral flavor' } },
        { value: 'distinct',   type: 'sparkling', label: { ko: '독특한 맛도 좋아',         en: 'Enjoy distinctive flavors' } },
      ]
    },
    {
      id: 'h7',
      text: { ko: '기능성 성분(비타민 등)이 들어간 물은 어떠신가요?', en: 'How about waters with added vitamins/supplements?' },
      options: [
        { value: 'love',       type: 'flavored',  label: { ko: '매우 좋아함',      en: 'Love functional waters' } },
        { value: 'maybe',      type: 'alkaline',  label: { ko: '조건부 OK',        en: 'Maybe if proven benefits' } },
        { value: 'plain',      type: 'purified',  label: { ko: '그냥 물이 좋아',    en: 'Prefer just plain water' } },
        { value: 'natural',    type: 'mineral',   label: { ko: '자연 미네랄만',    en: 'Only natural minerals' } },
      ]
    },
    {
      id: 'h8',
      text: { ko: '프리미엄 물에 투자할 의향이 있나요?', en: 'Would you pay extra for premium water?' },
      options: [
        { value: 'yes',        type: 'alkaline',  label: { ko: '당연히 지불함',     en: 'Absolutely' } },
        { value: 'maybe',      type: 'mineral',   label: { ko: '어느 정도는 OK',     en: 'Maybe a bit extra' } },
        { value: 'no',         type: 'purified',  label: { ko: '아니요',            en: 'No, standard is fine' } },
        { value: 'indifferent',type: 'tap',       label: { ko: '모두 비슷',         en: 'All water is similar' } },
      ]
    },
  ];
  
  export default healthQuestions;
  