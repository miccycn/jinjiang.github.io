require('vm').resetData(JSON.parse("{\"design\":\"default\",\"transition\":\"doors\",\"title\":\"Date in Web\",\"slides\":[{\"sid\":1410880910738,\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"梦想还是要有的\"},\"content\":{\"type\":\"text\",\"value\":\"万一实现了呢？\"}}},{\"sid\":1410880823924,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"\"},\"content\":{\"type\":\"img\",\"value\":\"http://static.pexels.com/wp-content/uploads/2014/07/alarm-clock-gold-hands-of-a-clock-1778.jpg\"}}},{\"sid\":\"A\",\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Date in Web\"},\"content\":{\"type\":\"text\",\"value\":\"@勾三股四\"}}},{\"sid\":\"B\",\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Let's Date with a model ^_^\"},\"content\":{\"type\":\"img\",\"value\":\"http://ww2.sinaimg.cn/bmiddle/61b90cbejw1ejv2nyt1nbj20hs0h8wfr.jpg\",\"config\":{}}}},{\"sid\":\"C\",\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Date in JavaScript\"},\"content\":{\"type\":\"text\",\"value\":\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date-objects\",\"config\":{}}}},{\"sid\":1410879174483,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"1.基本概念\"},\"content\":{\"type\":\"text\",\"value\":\"\"}}},{\"sid\":1410879192402,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"JS中Date的本质是什么?\"},\"content\":{\"type\":\"text\",\"value\":\"* 以1970年1月1日半夜为基准，即：\\n1970-01-01 00:00:00.000\\n* 精确到毫秒数\\n* 忽略闰秒 (leap seconds)\\n* 时区差异\"}}},{\"sid\":1410879734413,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"ISO 8601\"},\"content\":{\"type\":\"text\",\"value\":\"ISO 8601, the International Standard for the representation of dates and times.\\n-\\nhttp://www.iso.org/iso/iso8601\\nhttp://www.w3.org/TR/NOTE-datetime\"}}},{\"sid\":1410880696917,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"\"},\"content\":{\"type\":\"img\",\"value\":\"http://static.pexels.com/wp-content/uploads/2014/08/america-astronaut-astronomy-2422.jpg\"}}},{\"sid\":1410879400553,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"UTC & GMT\"},\"content\":{\"type\":\"text\",\"value\":\"协调世界时间\\nUniversal Time Coordinated\\nhttp://zh.wikipedia.org/wiki/UTC\\n如：北京时间 UTC+8\\n-\\n格林威治时间\\nGreenwich Mean Time\\nhttp://zh.wikipedia.org/wiki/GMT\"}}},{\"sid\":1410881011207,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"\"},\"content\":{\"type\":\"img\",\"value\":\"http://static.pexels.com/wp-content/uploads/2014/07/athlete-ball-bwin-2174.jpg\"}}},{\"sid\":1410880454500,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"DST\"},\"content\":{\"type\":\"text\",\"value\":\"夏时制\\nDaylight Saving Time\\nzh.wikipedia.org/wiki/DST\"}}},{\"sid\":1410881052623,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"2.基本原理\"},\"content\":{\"type\":\"text\",\"value\":\"\"}}},{\"sid\":1410879073162,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"day & time\"},\"content\":{\"type\":\"code\",\"value\":\"var msPerDay = 86400000;\\n\\nfunction Day(t) {\\n  return Math.floor(t / msPerDay);\\n}\\n\\nfunction TimeWithInDay(t) {\\n  return t % msPerDay;\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881086212,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"year number\"},\"content\":{\"type\":\"code\",\"value\":\"function DaysInYear(y) {\\n  if (y % 4 !== 0) {\\n    return 365;\\n  }\\n  else if (y % 100 !== 0) {\\n    return 366;\\n  }\\n  else if (y % 400 !== 0) {\\n    return 365;\\n  }\\n  else {\\n    return 366;\\n  }\\n}\\n\\nfunction DayFromYear(y) {\\n  return 365 * (y - 1970) +\\n    Math.floor((y - 1969) / 4) -\\n    Math.floor((y - 1901) / 100) +\\n    Math.floor((y - 1601) / 400);\\n}\\n\\nfunction TimeFromYear(y) {\\n  return msPerDay * DayFromYear(y);\\n}\\n\\nfunction YearFromTime(t) {\\n  // not perfectly correct\\n  var y = 1970;\\n  while (t > TimeFromYear(y)) {\\n    y++;\\n  }\\n  return y;\\n}\\n\\nfunction InLeapYear(t) {\\n  return (DaysInYear(YearFromTime(t)) === 366) ? 1 : 0;\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881192262,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"month number\"},\"content\":{\"type\":\"code\",\"value\":\"// 注意：0 ~ 11\\n\\nfunction DayWithinYear(t) {\\n   return Day(t) - DayFromYear(YearFromTime(t));\\n}\\n\\nfunction MonthFromTime(t) {\\n  var d = DayWithinYear(t);\\n  var leap = InLeapYear(t);\\n  if (d >= 0 && d < 31) {return 0;}\\n  if (d >= 31 && d < 59 + leap) {return 1;}\\n  if (d >= 59 + leap && d < 90 + leap) {return 2;}\\n  if (d >= 90 + leap && d < 120 + leap) {return 3;}\\n  if (d >= 120 + leap && d < 151 + leap) {return 4;}\\n  if (d >= 151 + leap && d < 181 + leap) {return 5;}\\n  if (d >= 181 + leap && d < 212 + leap) {return 6;}\\n  if (d >= 212 + leap && d < 243 + leap) {return 7;}\\n  if (d >= 243 + leap && d < 273 + leap) {return 8;}\\n  if (d >= 273 + leap && d < 304 + leap) {return 9;}\\n  if (d >= 304 + leap && d < 334 + leap) {return 10;}\\n  if (d >= 334 + leap && d < 365 + leap) {return 11;}\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881220138,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"date number\"},\"content\":{\"type\":\"code\",\"value\":\"function DateFromTime() {\\n  var m = MonthFromTime(t);\\n  var d = DayWithinYear(t);\\n  var leap = InLeapYear(t);\\n  if (m === 0) {return d + 1;}\\n  if (m === 1) {return d - 30;}\\n  if (m === 2) {return d - 58 - leap;}\\n  if (m === 3) {return d - 89 - leap;}\\n  if (m === 4) {return d - 119 - leap;}\\n  if (m === 5) {return d - 150 - leap;}\\n  if (m === 6) {return d - 180 - leap;}\\n  if (m === 7) {return d - 211 - leap;}\\n  if (m === 8) {return d - 242 - leap;}\\n  if (m === 9) {return d - 272 - leap;}\\n  if (m === 10) {return d - 303 - leap;}\\n  if (m === 11) {return d - 333 - leap;}\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881240289,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"week day\"},\"content\":{\"type\":\"code\",\"value\":\"// 注意：0 ~ 6\\n\\nfunction WeekDay(t) {\\n  return (Day(t) + 4) % 7;\\n}\\n\\n// tricks\\n\\nfunction isWeekend(t) {\\n  return WeekDay(t) % 6 === 0;\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881268603,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"local time\"},\"content\":{\"type\":\"code\",\"value\":\"var LocalTZA; // it depends\\n\\nfunction DaylightSavingTA(t) {\\n  // it depends\\n}\\n\\nfunction LocalTime(t) {\\n  return t + LocalTZA + DaylightSavingTA(t);\\n}\\n\\nfunction UTC(t) {\\n  return t - LocalTZA - DaylightSavingTA(t - LocalTZA);\\n}\\n\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881517224,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"hours, minutes, seconds, milliseconds\"},\"content\":{\"type\":\"code\",\"value\":\"var HoursPerDay = 24;\\nvar MinutesPerHour = 60;\\nvar SecondsPerMinute = 60;\\nvar msPerSecond = 1000;\\nvar msPerMinute = msPerSecond * SecondsPerMinute; // = 60000\\nvar msPerHour = msPerMinute * MinutesPerHour; // = 3600000\\n\\nfunction HourFromTime(t) {\\n  return Math.floor(t / msPerHour) % HoursPerDay;\\n}\\n\\nfunction MinFromTime(t) {\\n  return Math.floor(t / msPerMinute) % MinutesPerHour;\\n}\\n\\nfunction SecFromTime(t) {\\n  return Math.floor(t / msPerSecond) % SecondsPerMinute;\\n}\\n\\nfunction msFromTime(t) {\\n  return t % msPerSecond;\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881567608,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"make\"},\"content\":{\"type\":\"code\",\"value\":\"function MakeTime(hour, min, sec, ms) {\\n  if (isFinite(hour) || isFinite(min) || isFinite(sec) || isFinite(ms)) {\\n    return NaN;\\n  }\\n  var h = parseInt(hour, 10);\\n  var m = parseInt(hour, 10);\\n  var s = parseInt(hour, 10);\\n  var milli = parseInt(hour, 10);\\n  return h * msPerHour + m * msPerMinute + s * msPerSecond + milli;\\n}\\n\\nfunction MakeDay(year, month, day) {\\n  if (isFinite(year) || isFinite(month) || isFinite(day)) {\\n    return NaN;\\n  }\\n  var y = parseInt(year, 10);\\n  var m = parseInt(month, 10);\\n  var dt = parseInt(date, 10);\\n  var ym = y + Math.floor(m /12);\\n  var mn = m % 12;\\n  // not perfectly correct\\n  var t = 0;\\n  while (true) {\\n    if (YearFromTime(t) === ym && MonthFromTime(t) === mn && DateFromTime(t) === 1) {\\n      return Day(t) + dt - 1;\\n    }\\n    t++;\\n  }\\n}\\n\\nfunction MakeDate(day, time) {\\n  if (isFinite(day) || isFinite(time)) {\\n    return NaN;\\n  }\\n  return day * msPerDay + time;\\n}\\n\\nfunction TimeClip(time) {\\n  if (isFinite(time)) {\\n    return NaN;\\n  }\\n  return parseInt(time, 10);\\n}\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881656949,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"format\"},\"content\":{\"type\":\"code\",\"value\":\"YYYY-MM-DDTHH:mm:ss.sssZ\\n\\n2014-09-20\\n2014-09-20T14:00\\n2014-09-20T14:00Z\\n2014-09-20T14:00:00Z+0800\\n2014-09-20T14:00:00.000Z+0800\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881792007,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"3. 基本规范\"},\"content\":{\"type\":\"text\",\"value\":\"\"}}},{\"sid\":1410881811901,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"constructor\"},\"content\":{\"type\":\"code\",\"value\":\"new Date()\\nnew Date(value)\\nnew Date(year, month[, date[, hours[, minutes[, seconds[, ms]]]]])\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410881851245,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"abstract\"},\"content\":{\"type\":\"code\",\"value\":\"Date()\\nDate.UTC(year , month[, date[, hours[, minutes[, seconds[, ms]]]]])\\n// 注意 Date() 和 new Date() 定义不同，在ES6中两者已统一\\n\\nDate.now()\\nDate.parse(string)\\n\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410882020638,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"prototype\"},\"content\":{\"type\":\"img\",\"value\":\"http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2014/09/57657601.png\"}}},{\"sid\":1410882148020,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"prototype tips\"},\"content\":{\"type\":\"code\",\"value\":\"// 快速设置技巧\\nDate#setFullYear(year[, month[, date]])\\nDate#setMonth(month[, date])\\nDate#setHours(hour[, min[, sec[, ms]]])\\n...\\n\\n// toJSON\\nDate#toJSON.length // 1\\nDate#toJSON() // === Date#toISOString()\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410884282437,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"4 上层运用\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/WebIDL/#common-DOMTimeStamp\"}}},{\"sid\":1410884322620,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Web IDL\"},\"content\":{\"type\":\"text\",\"value\":\"The DOMTimeStamp type is used for representing a number of milliseconds\\n很多 JavaScript API 的规范中都有 DOMTimeString 类型的数据，举不胜举。\\n比如：DOM 中的 Event#timeStamp：\\nhttp://www.w3.org/TR/dom/#interface-event\"}}},{\"sid\":1410882785083,\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Date in HTML\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/html/\"}}},{\"sid\":1410882842374,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"1 <time>\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element\",\"config\":{}}}},{\"sid\":1410882997495,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"time element\"},\"content\":{\"type\":\"code\",\"value\":\"<time>2011-11</time>\\n<time>2011-11-12 14:54</time>\\n<time>Z</time>\\n<time>+0800</time>\\n<time>2011-11-12T14:54:39.929+00:00</time>\\n<time>2011-W46</time>\\n\\n<p>我<time datetime=\\\"2014-09-19\\\">昨天</time>来到了上海。</p>\\n<script>el.datetime; // '2014-09-19'</script>\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410883245207,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"2 <input>\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/html5/forms.html#the-input-element\"}}},{\"sid\":1410883285208,\"layout\":\"double\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"input element\"},\"content\":{\"type\":\"code\",\"value\":\"<input type=\\\"date\\\">\\n<input type=\\\"time\\\">\\n\\n<script>\\nel.value; // String\\nel.valueAsDate; // Date\\nel.valueAsDate = new Date(); // writable\\n</script>\",\"config\":{\"type\":\"code\"}},\"content2\":{\"type\":\"code\",\"value\":\"http://result.dabblet.com/gist/b31c55730c458cf6a7f0/d29258bb558bca2ce5954cecf42a8062d6226f07\",\"config\":{\"type\":\"demo\"}}}},{\"sid\":1410883723150,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"3 timer\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/html5/webappapis.html#timers\"}}},{\"sid\":1410883744890,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"timer\"},\"content\":{\"type\":\"code\",\"value\":\"var timer1 = setTimeout(function/string, timeout, args...)\\nvar timer2 = setInterval(function/string, timeout, args...)\\nclearTimeout(timer1)\\nclearInterval(timer2)\\n\\n// non-standard tricks: timer2 = timer1 + 1\\n\\n\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410884062825,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"其它\"},\"content\":{\"type\":\"text\",\"value\":\"# common infrastructure - date & time:\\nhttp://www.w3.org/TR/html5/infrastructure.html#dates-and-times\\n-\\n# track element:\\nhttp://www.w3.org/TR/html5/embedded-content-0.html#the-track-element\"}}},{\"sid\":1410886003557,\"layout\":\"double-subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"总结\"},\"content\":{\"type\":\"text\",\"value\":\"基本概念\\n基本原理\\n基本规范\\n* Date\\n上层运用\\n* DOMTimeStamp\"},\"subtitle\":{\"type\":\"text\",\"value\":\"Date in JavaScript\",\"config\":{}},\"subtitle2\":{\"type\":\"text\",\"value\":\"Date in HTML\",\"config\":{}},\"content2\":{\"type\":\"text\",\"value\":\"<time datetime>\\n* dateTime\\n<input type=\\\"date\\\">\\n<input type=\\\"time\\\">\\n* valueAsDate\\ntimer\",\"config\":{}}}},{\"sid\":1410884526873,\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"！玩毛线！\"},\"content\":{\"type\":\"text\",\"value\":\"One More Thing\"}}},{\"sid\":1410884653447,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"\"},\"content\":{\"type\":\"img\",\"value\":\"http://images.apple.com/watch/home/images/hero_ygold_edition_medium_2x.jpg\"}}},{\"sid\":1410884680529,\"layout\":\"title\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"That's a joke\"},\"content\":{\"type\":\"text\",\"value\":\"O(∩_∩)O\"}}},{\"sid\":1410884707546,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Web Performance\"},\"content\":{\"type\":\"text\",\"value\":\"This is real :-)\"}}},{\"sid\":1410884732103,\"layout\":\"subtitle\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"High Resolution！\"},\"content\":{\"type\":\"text\",\"value\":\"http://www.w3.org/TR/hr-time/\"}}},{\"sid\":1410884841675,\"layout\":\"normal\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"high resolution time\"},\"content\":{\"type\":\"code\",\"value\":\"typedef double DOMHighResTimeStamp;\\n\\nA DOMHighResTimeStamp SHOULD represent a time in milliseconds accurate to a microsecond.\\n\\n精确到千分之一毫秒 (sub-millisecond 亚毫秒) 的双精度数字\\n\\n如：\\nperformance.now()\\nnew Worker('foo.js').workerStart\",\"config\":{\"type\":\"code\"}}}},{\"sid\":1410885329381,\"layout\":\"imax\",\"items\":{\"title\":{\"type\":\"text\",\"value\":\"Thanks Shanghai\"},\"content\":{\"type\":\"img\",\"value\":\"http://static.pexels.com/wp-content/uploads/2014/08/asia-buildings-china-2509.jpg\"}}}]}"));