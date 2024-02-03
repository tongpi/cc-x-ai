'use client'
import React from 'react'
import type { AppCategory } from '@/models/chat'

export type ICategoryIcon = {
  category: AppCategory
}

const AllIcon = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 14 14" enable-background="new 0 0 14 14" xmlSpace="preserve">  <image id="image0" width="14" height="14" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUVXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu////+UM846AAAAHXRSTlMAG5LjZ+hDykLFvzBP01uWjqhB5cCZ9sIUvf7DTW9lO7oAAAABYktHRB5yCiArAAAAB3RJTUUH5woUBig2xDQecgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVd0tsgDHzXKXoELAkJjmMH89aZPvb4XUGcXyedz57YWAjtaiUI/f39h37F5UVJLtK9eLLFxDbLrpyMLZtbtV0a8963bevMsFfTsGSXrE2SNk8q8C1WSYuvjoVZfNU9q+GNgCJYxCxddk5y8SKrF8NCawFmC6f4tovtLjFHgQA2aj14yDonbu6DyT0MbFus0NsKTrloy4k4yHUfJsm8i3EDn0VUwuJSYVsEJlgqvi6wsiTYCne847mIELfhtsIt4ckCBi83X9NjsIBnZlW1l9SYxmSkV1xxIxjS6T4u3h1evA/GPpDrYBVMGM+AbRMAjFwc9QlFvCAtIMT8MwtQQKlQCLY6lKpQCB7HvC0EwbpD2GA1hX2sRQj8zneA7fcSYSyEYUMqBXxSkIe06ajVa0ht6J4PYek57nlYBGwnwcU1R+sOjen/pM+DR3M79IJPj3DkMjRiLMgzfkg9sSO8hsAZQTRqlwOg2+WtKRMYwSGcZIxSNKjKrekq+qjkse9iGXpCuN6BhmqrYpYiU6QSKWStOqo3nZBWHdt0lSKqrBhiK0Z/I2Z0M36LZtyLYvcnmNF1cMuYStc3C4K+IUcq4jl2YnTeIzANZD1D1uUM+RMwTeTjsHhCz6OPDej4wDiqlx6KvoZyhzT0A238G0P6qM0j8hdtDmnoBLn8RJsrcKepDvfv+/zVa55JNytOUHo+iefUyd9BjoYc6fA8yekf2QNt3CYBGQYAAABwSURBVAjXTc7HEoAwCATQtcSyGns3/P9vSmKccQ/AGw4AaJI0y9IEMbkRjckDilJiykJZ1R/rCqBpWuth28YQFCE6snsn+k0P9L5HyjDIn4wN458jpjlw8XWe9PC6KXeRbX2fPM6L93Ue39NwpAvDA9pJDJm9IV/WAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEwLTIwVDA2OjQwOjU0KzAwOjAwKCzmGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMC0yMFQwNjo0MDo1NCswMDowMFlxXqcAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMTAtMjBUMDY6NDA6NTQrMDA6MDAOZH94AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==" />
  </svg>
)
const WritingIcon = () => (
  <></>
)
const TranslateIcon = () => (
  < ></>
)

const HRIcon = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 14 14" enable-background="new 0 0 14 14" xmlSpace="preserve">  <image id="image0" width="14" height="14" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUVXu////8VXu8VXu8VXu8VXu8VXu8VXu////9+ABbyAAAAB3RSTlMAAH9VatD+TEg2JAAAAAFiS0dEAf8CLd4AAAAHdElNRQfnChQGKhO9Bqi3AAACPnpUWHRSYXcgcHJvZmlsZSB0eXBlIHhtcAAAOI2VVVu22zAI/GcVXYIMCKTlOJH113P62eV3wDcvXydt7RNbRogZBqTQ75+/6Edc3pTkKtObF1tM7GLVlYuxVXPrtslg3ublcpnMsHfTsFSXqkOKDi8q8G3WSZuvjoVVfNWtquGNgCJYxCxTNi5y9SarN8NCGwFmC5f4tqttLjFHgQA2ajN4yLpP3N2TySMMbJdYofcVXGrTUQtxkJueJqm8ifEAn0VUwuLSYVsEJlg6vq6wshTYGk+847mIEI90W+FW8GQBg8PNX+kxWMCzsqraITWmnIz0mituBEM60/PizeHFWzL2RO7JKpgwngE7dgAwcnHUJxTxhrSAEPOvLEABpUIh2Hoq1aEQPG7zthAEmw5hg9Uu7HMtQuDvfBNse5QIYyEMB1Jp4FOCPKQtt1odQ+pA97wJS69xz8Mi4DgJLq41Wjc1pr+TPg8eze3QCz4zwpFLasRYUPf4IfWOHeE1BK4IolG7GgDTrt+asoARHMJJclSiQVXuTdfRR63mvotl6Anh/gBK1VbFLEWmSCVSqNo1q7c7Ia2e23RF7xTcXVhBNxoYWxLdjN+iVStmnIBfdYFDUdN0SecuCiWPyJGKeI2dGJ33DEyJrKfIfIb8Dph25Nth8YJes48N6PjAOKpXnoq+hnI3aeiftVnA7gNDeqvNM/IHbW7S0Ik25X+0+QKetKvD8/M+P3rtZ9LdihOUXk/iferk76BGQ2Y6vJ/k9AevLG3DA8UVMwAAAEJJREFUCNdjYGBgUGKAADDNZAAkmBUYmAtcy0LYgRyW8vJyB6AYK5AOACpiB9IJSnAaJg5XxwDUBzaOSUkBiRaEAABSPg9HH4hISQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMC0yMFQwNjo0MjoxOSswMDowMMlEWRwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTAtMjBUMDY6NDI6MTkrMDA6MDC4GeGgAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTEwLTIwVDA2OjQyOjE5KzAwOjAw7wzAfwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" />
  </svg>
)
const ProgrammingIcon = () => (
  < ></>
)
const AssistantIcon = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 14 14" enable-background="new 0 0 14 14" xmlSpace="preserve">  <image id="image0" width="14" height="14" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUVXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu8VXu////9bf90iAAAAL3RSTlMAZn8QCY6vHUCbcy6SUWRHz1VgvZeRXT/t33KyTb9xGW0kWZ/EPCrRk8wUdVISJcBKi/wAAAABYktHRDCu3C3kAAAAB3RJTUUH5woUBik1RCZ+iQAAAjx6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVLsuMwCNxzijmCDAik4ziRtZuqt3zHnwa//J3MjF2RbYTopkEKff/+ol9xeVOSs0xvXmwxsZNVVy7GVs2t2yaDeZun02kyw95Nw1Jdqg4pOryowLdZJ22+OhZW8VW3qoYnAopgEbNM2bjI2Zus3gwLbQSYLVzi2862ucQcBQLYqM3gIes+cXVPJrcwsJ1ihV5XcKlNRy3EQW56mqTyJsYDfBZRCYtLh20RmGDp+DrDylJgazzxjHERIR7ptsKtYGQBg6ebf9JjsIBnZVW1p9SYcjLSa664EQzpTM+LN4cXb8nYE7knq2DCGAN27ABg5OKoTyjiDWkBIeYfWYACSoVCsPVUqkMheFzmbSEINh3CBqtd2PtahMCvfBNsu5UI70J4HUilgU8J8pC2XGr1HFIHuudNWHqMexwWAcdBcHGt0bqpMf2d9HHwaG6HXvCZEY5cUiPGgrrHD6l37AivIXBFEI3a1QCYdn5pygJGcAgnybcSDapybbqOPmo1910sQ08I9xtQqrYqZikyRSqRQtWuWb3dCWn13KarNGUErQjeMBZBzOhm/BatWqUrEx7JAdOxIdAH6aCKhS/IkYp4jZ0YnXcPTImsh8jLEfI7YNqRL4fFA3rNPjag4wPvUb1yV/Q1lLtIQ/+sjYLLB4b0Vpt75A/aXKShA2T7H21+gCft6vD8vM+fvfYz6WrFCUqPJ/E+dfB3UKMhMx3eT3L6A3YFbZqGYglaAAAAfklEQVQI1z2N6QKCMAyD40BB8QA88WJyeZv3fzvboeuPdl+zpICvgQmkh8NRpBSTlDEmjeJEMAGmirM5FmQayjrLlytR1hvnldoKceczjSJjf0Kp6N/74nA88RePsyplYi9VzaaFs6nSybxC/zH757l+c7Y7aYHH89VnvvMPvj3nD1V58Vf+AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEwLTIwVDA2OjQxOjUzKzAwOjAwAkmzqwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMC0yMFQwNjo0MTo1MyswMDowMHMUCxcAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMTAtMjBUMDY6NDE6NTMrMDA6MDAkASrIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==" />
  </svg>
)

export default function CategoryIcon({
  category,
}: ICategoryIcon) {
  switch (category) {
    case 'Writing':
      return <WritingIcon />
    case 'Translate':
      return <TranslateIcon />
    case 'HR':
      return <HRIcon />
    case 'Programming':
      return <ProgrammingIcon />
    case 'Assistant':
      return <AssistantIcon />
    default:
      return <AllIcon />
  }
}
