var faker = require('faker')
function generateMembers () {
  faker.locale = 'zh_TW'
  var members = []
  for (var id = 0; id < 70; id++) {
    var name = faker.name.firstName() + faker.name.lastName() + '\r\n'
    const allow = {
      sun: { onDays: Math.floor(Math.random() * 4), midday: Math.floor(Math.random() * 3), afternoon: Math.floor(Math.random() * 3) },
      mon: { onDays: Math.floor(Math.random() * 4), midday: Math.floor(Math.random() * 3), afternoon: Math.floor(Math.random() * 2) },
      tur: { onDays: Math.floor(Math.random() * 3), midday: Math.floor(Math.random() * 4), afternoon: Math.floor(Math.random() * 5) },
      wed: { onDays: Math.floor(Math.random() * 3), midday: Math.floor(Math.random() * 4), afternoon: Math.floor(Math.random() * 4) },
      thu: { onDays: Math.floor(Math.random() * 3), midday: Math.floor(Math.random() * 3), afternoon: Math.floor(Math.random() * 4) },
      fir: { onDays: Math.floor(Math.random() * 3), midday: Math.floor(Math.random() * 3), afternoon: Math.floor(Math.random() * 3) },
      sat: { onDays: Math.floor(Math.random() * 5), midday: Math.floor(Math.random() * 3), afternoon: Math.floor(Math.random() * 3) }
    }
    const gender = (Math.floor(Math.random() * 2) > 0) ? 'man' : 'woman'
    const weights = Math.floor(Math.random() * 4)
    members.push({
      id,
      name,
      allow,
      gender,
      weights
    })
  }

  return { members }
}

module.exports = generateMembers
