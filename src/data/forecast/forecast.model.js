import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const fromApiHourly = (hourlyForecast, timezone) => ({
  temperature: Math.round(hourlyForecast.temp),
  precipitationPercentage: `${Math.round(hourlyForecast.pop * 100)}%`,
  icon: {
    src: `https://openweathermap.org/img/wn/${hourlyForecast.weather[0].icon}@2x.png`,
    alt: hourlyForecast.weather[0].description,
  },
  timestamp: dayjs.unix(hourlyForecast.dt).tz(timezone),
})

const fromApiDaily = (dailyForecast, timezone) => ({
  icon: {
    src: `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`,
    alt: dailyForecast.weather[0].description,
  },
  timestamp: dayjs.unix(dailyForecast.dt).tz(timezone),
  description: `${dailyForecast.weather[0].description.charAt(0).toUpperCase()}${dailyForecast.weather[0].description.slice(1)}.`,
  highTemperature: Math.round(dailyForecast.temp.max),
  lowTemperature: Math.round(dailyForecast.temp.min),
})

const fromApiLastUpdated = (timestamp) => dayjs.unix(timestamp)

export default {
  fromApiHourly,
  fromApiDaily,
  fromApiLastUpdated,
}
