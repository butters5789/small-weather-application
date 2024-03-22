import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const fromApiLastUpdated = (timestamp) => ({
  timestamp: dayjs.unix(timestamp), // format('MMM D hh:mma')
})

const fromApiHourly = (hourlyForecast, timezone) => ({
  currentTemperature: `${Math.round(hourlyForecast.temp)}&deg;`,
  precipitationPercentage: `${Math.round(hourlyForecast.pop * 100)}%`,
  icon: {
    src: `https://openweathermap.org/img/wn/${hourlyForecast.weather[0].icon}@2x.png`,
    alt: hourlyForecast.weather[0].description,
  },
  timestamp: dayjs.unix(hourlyForecast.dt).tz(timezone), // format('H:mm A')
})

const fromApiDaily = (dailyForecast, timezone) => ({
  icon: {
    src: `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`,
    alt: dailyForecast.weather[0].description,
  },
  timestamp: dayjs.unix(dailyForecast.dt).tz(timezone), // format('ddd, MMM D')
  description: `${dailyForecast.weather[0].description.charAt(0).toUpperCase()}${dailyForecast.weather[0].description.slice(1)}.`,
  highTemperature: Math.round(dailyForecast.temp.max),
  lowTemperature: Math.round(dailyForecast.temp.min),
})

export default {
  fromApiLastUpdated,
  fromApiHourly,
  fromApiDaily,
}
