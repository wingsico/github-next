import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'beforeHistoryChange',
  'routeChangeError',
  'hashChangeStart',
  'hashChangeComplete',
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}

events.forEach(ev => {
  Router.events.on(ev, makeEvent(ev));
})

export default () => {
  function arriveToB() {
    Router.push({
      pathname: '/test/b',
      query: {
        id: 3,
      }
    }, '/test/b/3')
  }
  return (
    <>
      <Link href="/a?id=1" as="/a/1"><Button>A</Button></Link>
      <Button onClick={arriveToB}>B</Button>
      <Link href="/a#haha"><Button>Hash A</Button></Link>
    </>
  )
}
