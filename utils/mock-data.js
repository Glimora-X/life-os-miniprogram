const dayThread = [
  {
    id: 't1',
    period: '早上 07:30',
    title: '清晨很安静，我选择了出发。',
    body: '跑步 5 公里，呼吸顺了，人也清醒了。',
    note: '今天的起点很好。',
    noteTone: 'green',
    icon: 'sun'
  },
  {
    id: 't2',
    period: '上午 09:30',
    title: '进入深度工作。',
    body: '写方案，理思路，两个小时很专注。',
    note: '复杂的事，先做第一步。',
    noteTone: 'green',
    icon: 'ring'
  },
  {
    id: 't3',
    period: '下午 15:40',
    title: '有一点走神。',
    body: '刷了会儿手机，思绪飘走了。',
    note: '没关系，注意到就好。',
    noteTone: 'warm',
    icon: 'cloud'
  },
  {
    id: 't4',
    period: '晚上 21:10',
    title: '复盘今天。',
    body: '完成了重要的事，也有浪费的时间。',
    note: '看见，就是改变的开始。',
    noteTone: 'green',
    icon: 'moon'
  }
]

const closingOptions = [
  { id: 'c1', label: '一句话', icon: 'quote' },
  { id: 'c2', label: '一个决定', icon: 'check' },
  { id: 'c3', label: '一个没完成也没关系的事', icon: 'leaf' }
]

const echoClusters = [
  {
    id: 'e1',
    icon: 'quote',
    title: '你最近常说的话',
    updatedAt: '更新于 今天 08:30',
    decor: 'leaves',
    items: [
      { text: '慢一点，也没有关系。', time: '今天 07:41' },
      { text: '先做小版本，不要急着证明。', time: '昨天 22:13' },
      { text: '复杂的事，先做第一步。', time: '6月1日 21:08' }
    ]
  },
  {
    id: 'e2',
    icon: 'sun',
    title: '今天保存过的瞬间',
    updatedAt: '今天 21:36',
    decor: 'lake',
    items: [
      { text: '下午阳光很好，散步 35 分钟。', time: '15:42' },
      { text: '写完方案后，心里轻了一点。', time: '11:58' },
      { text: '注意到走神，没有责备自己。', time: '15:48' }
    ]
  },
  {
    id: 'e3',
    icon: 'leaf',
    title: '还没想完的事',
    updatedAt: '更新于 昨天 23:01',
    decor: 'path',
    items: [
      { text: '如何把工作和生活结合得更柔和？', time: '' },
      { text: '儿童绘本资产库，从哪一步开始？', time: '' },
      { text: '点读笔铺码工具，要不要先做最小版？', time: '' }
    ]
  }
]

const echoResurface = {
  title: '三周前的你也写过类似的话',
  action: '重新遇见',
  quote: '保持节奏，保护注意力。',
  caption: '当时的你在学习专注与边界。',
  date: '5月13日'
}

const patterns = [
  {
    id: 'p1',
    icon: 'moon',
    statement: '你常在周三晚上开始怀疑方向',
    evidence: '每到周三 20:00 后，低落感的记录会变多。'
  },
  {
    id: 'p2',
    icon: 'walk',
    statement: '散步后的记录更容易做决定',
    evidence: '走完路回来后，你更快写下想法，也更少自我纠结。'
  },
  {
    id: 'p3',
    icon: 'sleep',
    statement: '睡眠少于 6 小时，文字会变得更短',
    evidence: '休息不足的日子里，你的记录更简短，也更直接。'
  },
  {
    id: 'p4',
    icon: 'pen',
    statement: '最近 11 天，你把「慢一点」写了 4 次',
    evidence: '你在提醒自己：放慢，才能看清。'
  }
]

const patternSuggestion = {
  title: '今晚，如果又在怀疑方向，先睡个好觉',
  body: '好好休息，比想明白更重要。'
}

const lifeWords = ['专注', '规律', '成长', '真诚', '感恩']

const recentPatterns = ['早上状态更好', '散步能让我平静下来', '睡眠影响情绪']

const lifeAspiration =
  '一个内心稳定、持续学习、对他人和世界有益的人。'

const recordPrefs = [
  { icon: 'calendar', label: '每天记录' },
  { icon: 'list', label: '简短但真实' },
  { icon: 'clock', label: '晚上回顾' }
]

const lifeFingerprint = [
  '我在专注中感到满足',
  '我需要独处来充电',
  '帮助他人让我快乐'
]

const settingsMenu = [
  { icon: 'target', label: '个人目标' },
  { icon: 'cloud', label: '数据与同步' },
  { icon: 'bell', label: '提醒设置' },
  { icon: 'palette', label: '外观' }
]

const captureIntents = [
  { id: 'keep', label: '留住', icon: 'leaf' },
  { id: 'clarify', label: '理清', icon: 'wave' },
  { id: 'later', label: '待会儿', icon: 'clock' },
  { id: 'unclear', label: '说不清', icon: 'cloud' }
]

module.exports = {
  dayThread,
  closingOptions,
  echoClusters,
  echoResurface,
  patterns,
  patternSuggestion,
  lifeWords,
  recentPatterns,
  lifeAspiration,
  recordPrefs,
  lifeFingerprint,
  settingsMenu,
  captureIntents
}
