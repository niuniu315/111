function beautifyDate(x) {
  let createdTime = new Date(x)
  let time = createdTime.getTime()
  let now = Date.now()
  let timeInterval = now - time
  let beautifyCreatedTime = ''
  let oneminute = 1000 * 60
  let onehour = 1000 * 3600
  let oneday = 1000 * 3600 * 24

  switch (true) {
    // 一分钟内
    case timeInterval < 1000 * 60:
      beautifyCreatedTime = '刚刚'
      break
    // 一小时内
    case timeInterval < 1000 * 3600:
      beautifyCreatedTime = Math.floor(timeInterval / oneminute) + '分钟前'
      break
    // 24小时内
    case timeInterval < 1000 * 3600 * 24:
      beautifyCreatedTime = Math.floor(timeInterval / onehour) + '小时前'
      break
    default:
      beautifyCreatedTime = Math.floor(timeInterval / oneday) + '天前'
  }
  return beautifyCreatedTime
}

export default beautifyDate;