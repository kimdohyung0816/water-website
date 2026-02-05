const waterTypes = [
    {
      id: 'tap',
      name: { ko: '수돗물', en: 'Tap Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '상수도 시설 정수 처리', en: 'Municipal treatment plants' },
      ph: 7,
      description: {
        ko: '정부 기준에 따라 소독·여과된 물. 일상 음용 및 요리에 사용.',
        en: 'Treated and disinfected by municipal systems. Used for daily drinking and cooking.'
      },
      imageUrl: 'data:image/jpeg;base64,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',
      buyLink: ''
    },
    {
      id: 'mineral',
      name: { ko: '천연 광천수', en: 'Mineral Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '지하 암반층 자연 용출', en: 'Natural underground aquifer' },
      ph: 7.5,
      description: {
        ko: '풍부한 칼슘·마그네슘 등 미네랄 함유. 스포츠 후 미네랄 보충에 도움.',
        en: 'Rich in calcium & magnesium. Helps replenish minerals after exercise.'
      },
      imageUrl: 'https://i.ytimg.com/vi/OQEr64Uo4wg/maxresdefault.jpg',
      buyLink: ''
    },
    {
      id: 'spring',
      name: { ko: '약수/샘물', en: 'Spring Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '자연 용천수', en: 'Natural spring source' },
      ph: 7,
      description: {
        ko: '불순물 적고 깨끗. 생수로 바로 병입 가능.',
        en: 'Very clean and low in impurities. Bottled directly as spring water.'
      },
      imageUrl: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_12E2D82A099D8F478CB3AC4F5F6D6B7A.jpg',
      buyLink: ''
    },
    {
      id: 'glacier',
      name: { ko: '빙하수', en: 'Glacier Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '빙하 융해수', en: 'Melted glacier' },
      ph: 7,
      description: {
        ko: '오염으로부터 격리된 순수함. 부드러운 목넘김.',
        en: 'Pristine, isolated from pollution. Smooth mouthfeel.'
      },
      imageUrl: 'data:image/jpeg;base64,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',
      buyLink: ''
    },
    {
      id: 'distilled',
      name: { ko: '증류수', en: 'Distilled Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '끓인 수증기 응축', en: 'Condensed steam' },
      ph: 5.5,
      description: {
        ko: '미네랄 제거된 순수 H₂O. 의료·실험실·가전용.',
        en: 'Almost pure H₂O. Used in medical, lab, and appliances.'
      },
      imageUrl: 'https://m.degrasse.co.kr/web/product/big/201803/439_shop1_961563.jpg',
      buyLink: ''
    },
    {
      id: 'purified',
      name: { ko: '정제수', en: 'Purified Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '정수기·역삼투압', en: 'Filtration/RO systems' },
      ph: 6.5,
      description: {
        ko: '역삼투압 등으로 불순물 제거. 식수 및 커피·차에 사용.',
        en: 'Filtered to remove impurities. Used for drinking, coffee, tea.'
      },
      imageUrl: 'https://science.pulin.co.kr/wp-content/uploads/2020/12/img-39.png',
      buyLink: ''
    },
    {
      id: 'sparkling',
      name: { ko: '탄산수', en: 'Sparkling Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '자연/인공 탄산 주입', en: 'Natural/artificial carbonation' },
      ph: 4.5,
      description: {
        ko: '톡 쏘는 청량감. 칵테일 믹서로도 사용.',
        en: 'Bubbly refreshment. Also used as cocktail mixer.'
      },
      imageUrl: 'https://blog.kakaocdn.net/dn/bRT5xC/btsJlJ7ECzu/wOiHCyt0nPTL4B3VpA99O0/img.jpg',
      buyLink: ''
    },
    {
      id: 'alkaline',
      name: { ko: '알칼리수', en: 'Alkaline Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '자연/전기분해', en: 'Natural/electrolysis' },
      ph: 8.0,
      description: {
        ko: 'pH 8 이상. 속쓰림 완화, 부드러운 맛.',
        en: 'pH >8. May ease acid reflux; smooth taste.'
      },
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q2VR-u5AMb4mIbNd68HKLHygcW1eUzpGFg&s',
      buyLink: ''
    },
    {
      id: 'deepSea',
      name: { ko: '해양 심층수', en: 'Deep Ocean Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '수심 200m 이하 해양', en: 'Below 200m depth' },
      ph: 8.0,
      description: {
        ko: '미네랄 균형이 뛰어난 청정 심층수.',
        en: 'Clean deep-sea water with balanced minerals.'
      },
      imageUrl: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjlfMjc5/MDAxNTU5MDk3MDU3ODY0.dEnfKlMUU5omc3KATFqufqFWngGtUFEcR9L516CJrusg.avx4weTlKkbcD0cdT1sRWCxtTeSg2PCeCYcrY1qsPfEg.JPEG.kordipr/SE-61a82ba1-7ce3-41fb-a69f-c6433095e86d.jpg?type=w800',
      buyLink: ''
    },
    {
      id: 'flavored',
      name: { ko: '가향/기능성 워터', en: 'Flavored & Functional Water' },
      sourceLabel: { ko: '출처', en: 'Source' },
      source: { ko: '정제수 + 첨가물', en: 'Purified + additives' },
      ph: 6.0,
      description: {
        ko: '과일향·비타민 첨가. 물 섭취 증진 도움.',
        en: 'Fruit flavors & vitamins added. Encourages hydration.'
      },
      imageUrl: 'https://www.nature-ingredient.com/shopimages/naturein21/mobile/9/10384719_represent?10101722',
      buyLink: ''
    },
  ];
  
  export default waterTypes;
  